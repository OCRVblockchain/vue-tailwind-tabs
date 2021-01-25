// import store from '../store';
//
export function handleResponse (response: { status: number; statusText: any; data: any; }) {
    if (response.status !== 200 && response.status !== 201) {
        // if (response.status === 401) {
        //     store.commit("setError", 'Ошибка авторизации');
        // }

        const error = response.statusText;
        return Promise.reject(error);
    }
    return response.data;
}

export function handleResponseData (response: { hits: { total: { value: number; }; hits: any; }; }) {
    return mutationHits(response.hits, el => {
        let obj = el._source;
        if('doc' in el._source) {
            obj = el._source.doc;
        }
        obj._id = el._id;
        obj.sort = el.sort;
        return obj;
    });
}

export function handleResponsePayload (response: { hits: any; }) {
    return mutationHits(response.hits, el => {
        let obj = el._source;
        if('doc' in el._source) {
            obj = el._source.doc;
            if('payload' in obj) {
                obj = {...obj.payload, ...obj};
                delete obj.payload;
            }
        }
        obj._id = el._id;
        obj.sort = el.sort;
        return obj;
    });
}

function mutationHits(data: { total: { value: number; }; hits: any; }, funcMap: (el: any) => any) {
    try {
        if(data.total.value == 0) {
            return Promise.resolve({ count: 0, data: [] });
        }

        const list = data.hits;
        return Promise.resolve({
            count: data.total.value || 0,
            data: list.map(funcMap)
        });
    } catch (error) {
        return Promise.resolve({ count: 0, data: [] });
    }
}

function parseError(error: { response: { data: { text: any; }; }; message: any; }) {
    if(error.response && error.response.data.text) {
        switch (error.response.data.text) {
            case 'Network Error':
                return 'Ошибка взаимодействия с сервером'
            default: return error.response.data.text;
        }
    } else {
        switch(error.message) {
            case 'Request failed with status code 404':
                return 'Индекс не обнаружен'
            case 'Request failed with status code 400':
                return 'Данные не обнаружены'
            case '502 Bad Gateway':
                return 'Сервер не отвечает'
            default: return error.message;
        }
    }
}

export function handleError (error: { response: { data: { text: any; }; }; message: any; }) {
    let message = parseError(error);
    //store.commit("setError", message);
    return Promise.reject(message);
}

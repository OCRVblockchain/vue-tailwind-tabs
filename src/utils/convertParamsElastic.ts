/* ПРИМЕР

{
    config: {
        size: 10
    },
    params: {                                             // Для всех элементов в корне params выполняется условие И
        'SITEID': '63',
        'DESCRIPTION.wildcard': ['*пу*', '*ву*', '*ту*'], // Тут будут условия ИЛИ для поля DESCRIPTION
        'DESC.or': {                                      // Тут будет условие ИЛИ между полями pValue и DESCRIPTION. В Название главное обозначение .or, DESC - произвольное имя
            'pValue.wildcard': '*пу*',
            'DESCRIPTION.wildcard': '*ту*'
        }
    }
}

*/

type anyParams = {
  [key: string]: any
}

type fixedParams = {
  config: {
    pagination: {
      search_after_timestamp: any;
      search_after_id: any;
      search_after_score: any;
    };
    from: any;
    size: any;
    sort: any;
    typeofasset: string;
  };
  params: any;
}

export type { anyParams, fixedParams }

export function convertParamsElastic (params: fixedParams, prefixField = '') {

  let search_after;
  if (params.config.pagination && params.config.pagination.search_after_timestamp && params.config.pagination.search_after_id) {
    search_after = [params.config.pagination.search_after_score, params.config.pagination.search_after_timestamp, params.config.pagination.search_after_id];
  }

  const query =  {
    track_total_hits: true,
    from: params.config.from || 0,
    size: params.config.size || 10,
    sort: params.config.sort || [{"_score": {"order": "desc"}}, {
      "doc.updatedAt": {
        "order": "desc",
        "unmapped_type": "long"
      }
    }, {"_id": {"order": "desc"}}],
    query: {
      bool: {
        must: convertParams(params.params, prefixField)
      }
    },
    search_after: search_after
  };

  // if (search_after)
  //   query.search_after = search_after;

  return query;
}

type Query = {
  'match'?: anyParams
  'terms'?: anyParams
  'wildcard'?: anyParams
  'regexp'?: anyParams
  'range'?: anyParams
  'exists'?: anyParams
  'match_phrase'?: anyParams
}

function convertParams (params: anyParams, prefixField = ''): Query[] {
  return Object.entries(params)
    .filter(([key, value]) => key !== 'SOURCE' && value !== '' && value !== null && value !== undefined)
    .map(([key, value]) => {

      // if (Array.isArray(value) && !key.includes('.terms') && !key.includes('.array')) {
      //   return {
      //     bool: {
      //       should: value.map(x => {
      //         return getMatch(key, x, prefixField);
      //       })
      //     }
      //   };
      // }
      //
      // if (key.includes('.or')) {
      //   return {
      //     bool: {
      //       should: convertParams(value, prefixField)
      //     }
      //   };
      // }

      return getMatch(key, value, prefixField)
    });
}

function getMatch (key: string, value: any, prefixField: string): Query {
  // if (key.includes('.match_prefix')) {
  //   key = `${prefixField}${key.split('.match_prefix')[0]}`
  //
  //   let match_phrase_prefix = {}
  //   match_phrase_prefix[typeof value === 'number' ? getKeywordKey(key) : key] = {
  //     query: value,
  //     max_expansions: 10000,
  //     boost: 1,
  //   }
  //
  //   return {match_phrase_prefix};
  // }

  if (key.includes('.match')) {
    return {"match": {[`${prefixField}${key.split('.match')[0]}`]: value}}
  }

  if (key.includes('.terms')) {
    return {"terms": {[`${prefixField}${key.split('.term')[0]}`]: Array.isArray(value) ? value : [value]}}
  }

  if (key.includes('.wildcard')) {
    return {"wildcard": {[`${prefixField}${key.split('.wildcard')[0]}`]: value}}
  }

  if (key.includes('.regexp')) {
    return {"regexp": {[`${prefixField}${key.split('.regexp')[0]}`]: value.toLowerCase()}}
  }

  if (key.includes('.range')) {
    return {"range": {[`${prefixField}${key.split('.range')[0]}`]: value}}
  }

  if (key.includes('.exists')) {
    return {"exists": {"field": `${prefixField}${key.split('.exists')[0]}`}}
  }
  //
  // if (key.includes('.array')) {
  //   return {
  //     bool: {
  //       must: value.map(el => {
  //         return Object.entries(el).map(([k, v]) => getMatch(k, v, prefixField))
  //       })
  //     }
  //   }
  // }

  return {"match_phrase": {[`${prefixField}${key}`]: value}};
}
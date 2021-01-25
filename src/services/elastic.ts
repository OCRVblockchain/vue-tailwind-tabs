import axios from 'axios'
import { elasticUrl } from '../network'
import { handleResponse, handleResponseData, handleResponsePayload, handleError } from '../utils/handlers';
import { fixedParams, convertParamsElastic } from '../utils/convertParamsElastic'

export const elasticService = {
  getData, getPayload //, getItem
};

function getData (params: fixedParams) {

  const formData = convertParamsElastic(params, 'doc.');

  return axios({
      method: 'post',
      url: `${elasticUrl}/${params.config.typeofasset}/_search`,
      data: formData,
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(handleResponse)
  .then(handleResponseData)
  .catch(handleError);
}

function getPayload (params: fixedParams) {

  const formData = convertParamsElastic(params, 'doc.payload.');

  return axios({
      method: 'post',
      url: `${elasticUrl}/${params.config.typeofasset}/_search`,
      data: formData,
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(handleResponse)
  .then(handleResponsePayload)
  .catch(handleError);
}

// function getItem (index, id) {
//   return axios({
//       method: 'post',
//       url: `${elasticUrl}/${index}/_search`,
//       data: convertParamsElastic({ config: { size: 1, sort: [{ "_score": { "order": "desc" }}] }, params: { '_id': id } }),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   })
//   .then(handleResponse)
//   .then(handleResponsePayload)
//   .catch(handleError);
// }
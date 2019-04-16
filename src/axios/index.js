// import Http from './config'
import JsonP from 'jsonp'

// 请求天气情况
export const jsonp = function (options) {
  return new Promise((resolve, reject) => {
    JsonP(options.url, {
      param: 'callback'
    }, function (err, response) {
      if (response.status == 'success') {
        resolve(response);
      } else {
        reject(response.messsage);
      }
    })
  })
}


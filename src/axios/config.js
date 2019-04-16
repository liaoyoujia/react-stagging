import axios from 'axios'

// import {startLoading,endLoading} from './loading'
import {message} from 'antd';

let err = () => {
  message.error('接口出错了，怎么办啊，我也不知道啊')
}

let http = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api',
  timeout: 5000,
});


http.interceptors.request.use(function (config) {
  return config;

}, function (error) {
  err()
  return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
  return response;

}, function (error) {
  err()
  return Promise.reject(error);
});

export default http
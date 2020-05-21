import axios from 'axios'
import qs from 'qs'
// let url = '/'
let url = 'http://10.0.0.103:8010/';
const Axios = axios.create({
  baseURL: url,
  timeout: 5000,
  responseType: "json",
  withCredentials: false, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});
Axios.interceptors.request.use(
  config => {
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete'
    ) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    Toast.fail('请求失败');
    return Promise.reject(error);
  }
)

Axios.interceptors.response.use(
  response => {
    let code = response.data.code;
    //请求正常
    if (code == 0) {
      return response.data;
    }

    if (code == 3001 || code == 4001) {
      // Toast.fail(response.data.msg)
      alert(`response.data.msg`)
    }
  },
  error => {
    Toast.fail('网络错误')
    console.log("error", error)
    return Promise.reject(error);
  }
);

function fetch(url, params) {
  return new Promise((resolve, reject) => {
    Axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch(error => {
        reject(error)
      })
  });
}

export default {
  fetch
}

import axios from 'axios';
import Qs from 'qs'
//axios.defaults.timeout = 5000;

var axios_instance = axios.create({
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  headers:{'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'}
})

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url,data={}){
    return new Promise((resolve,reject)=>{
        axios_instance.get(url,data).then(response => {
            resolve(response.data);
         }).catch(err => {
            reject(err)
         })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url,data={}){
    return new Promise((resolve,reject)=>{
        axios_instance.post(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
    })
}

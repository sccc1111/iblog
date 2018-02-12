import axios from 'axios';

axios.defaults.timeout = 5000;

axios.interceptors.request.use(config => {
    config.data = JSON.stringify(config.data);
    return config;
});

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{
            params:params
         }).then(response => {
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
export function post(url,data = {}){
    return new Promise((resolve,reject)=>{
        axios.post(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
    })
}

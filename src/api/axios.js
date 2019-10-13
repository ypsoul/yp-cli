/**
 * 封装axios
 * 返回值是promise对象
 * 
 * 优化1：统一处理请求接口异常
 * 
 * 优化2：请求返回的是response.data,不是response
 */

import axios from "axios"

export default function ajax(url,data={},type="GET"){
    let promise;
    return new Promise(function(resolve) {
        if(type === "GET"){
            promise = axios.get(url,{
                params: data
            })
        }else{
            promise = axios.post(url,data)
        }
        promise.then(respose => {
            resolve(respose.data)
        }).catch(err => {
            console.log("请求出错:" + err.message)
        })
    })
}


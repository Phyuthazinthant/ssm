import { API_URL } from './api'

export const categoryItem = (id,callback) => {
    fetch(API_URL + "/getProduct/categoryItem", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-cache",
        body:JSON.stringify({ id:id })
    })
    .then(response => {
        if (response.status !== 200) throw response.json()
        else return response.json()
    })
    .then(data => {
        callback(null, data)
    })
    .catch(error => error.then(error => callback(error, null)))
}

export const newItem = (callback) => {
    fetch(API_URL + "/getProduct/newItem", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-cache",
    })
    .then(response => {
        if (response.status !== 200) throw response.json()
        else return response.json()
    })
    .then(data => {
        callback(null, data)
    })
    .catch(error => error.then(error => callback(error, null)))
}
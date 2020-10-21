import { API_URL } from './api'

export const getSubcategory = (callback) => {
    fetch(API_URL + "/getSubcategory", {
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
import Axios from "axios"

const API_URI = "http://donedev.co.kr"

async function Post({ path, params}) {
    const full_path = `${API_URI}${path}`
    return await Axios.post(full_path, params)
    .then(res => res.data)
    .catch(err => {
        console.log(err)
        return false
    })
}

async function Get({ path, params}) {
    const full_path = `${API_URI}${path}`
    return await Axios.get(full_path, params)
    .then(res => res.data)
    .catch(err => {
        console.log(err)
        return false
    })
}

module.exports = {
    Post,
    Get
}
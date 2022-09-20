import { Post } from "./api"

console.log(`TEST => ${process.env.TEST}`)

async function LoginAuth({ login_id, login_pw}){ 
    const path = "/auth",
    params = {
        login_id,
        login_pw
    }

    return await Post({ path, params })
}

module.exports = {
    LoginAuth
}
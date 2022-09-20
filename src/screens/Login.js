import React, { useState } from "react"
import { Alert, Button, StyleSheet, TextInput, View } from "react-native"
import { useDispatch } from "react-redux"
import { LoginAuth } from "../modules/auth"
import { authReducer } from "../store/auth"


export default function() {
    const [ login_id, set_login_id ] = useState("intname")
    const [ login_pw, set_login_pw ] = useState("qwe123!@#")
    const dispatch = useDispatch()

    async function onLogin() {
        if(!login_id || !login_pw) {
            Alert.alert(
                "Message",
                !login_id ? "Please ID Empty" : "Please Password Empty"
            )
        } else {
            let data = await LoginAuth({ login_id, login_pw })
            if(data && data.token) {
                Alert.alert(
                    "Message",
                    "Login Succssed"
                )
                dispatch(authReducer(data.token))
            } else {
                Alert.alert(
                    "Message",
                    "Login Failed"
                )
            }
        }
    }

    return (
        <View style={s.container}>
            <TextInput style={s.input} onChangeText={(text) => set_login_id(text)} value={login_id} placeholder="아이디를 입력해주세요." />
            <TextInput style={s.input} onChangeText={(text) => set_login_pw(text)} value={login_pw} placeholder="비밀번호를 입력해주세요." />
            <Button style={s.button} title="로그인" onPress={onLogin} />
        </View>
    )
}

const s = StyleSheet.create({
    container:  {
        padding: 20
    },
    input: {
        borderRadius: 10
        , borderWidth: 1
        , borderColor: "#CCC"
        , height: 50
        , minWidth: 300
        // , marginLeft: "auto"
        // , marginRight: "auto"
        , marginTop: 5
        , marginBottom: 5
        , paddingLeft: 20
        , paddingRight: 20
    }
    , button: {
        borderRadius: 10
    }
})
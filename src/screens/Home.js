import React, { useState, useEffect } from "react"
import { Alert, Button, Image, Text, TextInput, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import SelectBox from 'react-native-multi-selectbox'
import { Get } from "../modules/api"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { TestScreen } from "."
const Tab = createBottomTabNavigator()

function Home() {
    return (
        <View>
            <Text>TEST</Text>
        </View>
        )
}

function ListContainer() {
    return (
        <View style={{ flex: 1}}>
            <HeaderWrapper />
            <ListWrapper />
        </View>
    )    
}

function HeaderWrapper() {
    return (
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TextInput style={{ flex: 2, borderWidth: 1, height: 50, marginLeft: 10, textAlign: "center", borderColor: "#CCC", borderRadius: 10 }} placeholder="시작일" />
            <TextInput style={{ flex: 2, borderWidth: 1, height: 50, marginLeft: 10, textAlign: "center", borderColor: "#CCC", borderRadius: 10 }} placeholder="종료일" />
            <Icon style={{ flex: 1, margin: 15 }} name="search" size={20}/>
        </View>
    )
}

function ListWrapper() {
    return (
        <View style={{ flex: 9 }}>
            <Text>ListWrapper</Text>
        </View>
    )
    
}

function ChatContainer() {
    return (
        <View style={{ flex: 4 }}>
            <Text>Chat</Text>
        </View>
    )
    
}

function TableContainer() {  
    return (
        <View style={{ flex: 6 }}>
            <Text>Table</Text>
        </View>
    )
}

function EditorContainer() {
    const options = [
        { item: "extra", id: "C000001" }
    ]
    const [ price, setPrice ] = useState()
    const [ content, setContent ] = useState()
    
    async function onSave() {
        if(!price && !content) {
            Alert.alert(
                "Message",
                "값을 확인해주세요."
            )
        } else {
            const path = "/auth",
            params = { }
            await Get({path, params})
            console.log("저장")
        }
    }

    return (
        <View style={{ position: "absolute", left:0, top: 0, width: "100%", height: "100%"}}>
            {/* <View style={{ backgroundColor: "#CCC", width:"100%", height:"100%", position:"absolute", left:0 , top:0, opacity: 0.5 }}></View> */}
            <View style={{ margin: "10%", width: "80%", height: "80%", backgroundColor: "white", borderWidth: 1, borderRadius: 10, borderColor: "#CCC", paddingTop: 50, paddingBottom: 50, paddingLeft: 25, paddingRight: 25}}>
                <TextInput onChangeText={(text) => setPrice(text)} placeholder="금액을 입력해주세요." value={price} />
                <TextInput onChangeText={(text) => setContent(text)} placeholder="내용을 입력해주세요." value={content} />
                <Button title="저장하기" onPress={onSave} />
                <Button title="취소하기" />
            </View>

        </View>
    )
}

function SideButton() {
    return (
        <View style={{position: "absolute", right: 50, bottom: 50, width: 50, height: 50}}>
            <Icon name="card-outline" size={40} />
        </View>
    )
}

export default Home
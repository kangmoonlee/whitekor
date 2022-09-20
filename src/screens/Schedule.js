import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useState } from "react"
import { Button, Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { useDispatch } from "react-redux"
import { Calendar, EditButton } from "../components"
import { MainTemplate } from "../templates"

const Stack = createNativeStackNavigator()

function Schedule({ navigation }) {
    const today = new Date()
    const [data, setData] = useState({})
    const onEdit = () => {
        navigation.navigate("payment")
    }

    const onDayPress = (date) => {
        console.log(typeof date.day)

        setData({
            ...date,
            items: [{
                date: "2022. 01. 01", category_name: "학원", content: "보컬"
            }]
        })
    }

    return (
        <MainTemplate 
            view={ViewScreen}
            editor={EditorScreen}
        />
    )
}
function ViewScreen({ navigation }) {
    return <View>
        <Text><Button onPress={() => navigation.push("editor") } title="TEST" /></Text>
    </View>
    
}

function EditorScreen() {
    // const { }
    const [ list, setList ] = useState([])

    const onNewSchedule = () => {
        // const [ data, setData ] = useState({
        //     category: "1",
        //     content: "test"
        // })
        setList([
            ...list,
            1
        ])
    }
    return (
        <View>
            <View>
                <TextInput placeholder="내용"/>
            </View>
            <ScheduleContainer list={list} />
            <Button title="추가" onPress={onNewSchedule} />
            <Button title="저장" />
        </View>
    )
}

function ScheduleContainer({ list }) {
    return list.map((item, index) => {
        return ( 
            <View key={index}>
                <ScheduleEditor />
            </View>
        )
    })
}

function ScheduleEditor() {
    const [ category, setCategory ] = useState(null)
    const [ content, setContent ] = useState(null)
    const dispatch = useDispatch()

    return (
        <View>
            <TextInput value={content} placeholder="ASF"/>
            <Text>TEST1234</Text>
        </View>
    )
}


function RenderItems({ month, day, items }){
    console.log(items)
    return (
        <View>
            <Text>{month}. {day}</Text>
            <RenderItem items={items} />
        </View>
    )    
}

function RenderItem({ items }) {
    console.log("items")
    console.log(items)
    return <></>
    // return items ? items.array.forEach((item, index) => {
    //     return <View key={index}>
    //         <Text>TEST</Text>
    //     </View>
    // }) : <></>;

}

export default Schedule

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const s = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight
    },
    wrapper: {
        width: screenWidth,
        height: screenHeight
    }
})
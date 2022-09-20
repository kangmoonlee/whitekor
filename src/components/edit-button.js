import { StyleSheet, Text, View } from "react-native"
import { Entypo } from "@expo/vector-icons"

export default ({ onPress }) => {

    return (
        <View style={s.container}>
            <Entypo name="pencil" size={36} color="black" onPress={onPress}/>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        position: "absolute",
        right: 25,
        bottom: 25,
        zIndex: 10000,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 50,
        padding: 10
    }
})
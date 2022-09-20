import { SimpleLineIcons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

export default ({ onOptionClick, navigation }) => {
    console.log(navigation)
    return (
        <>
            <View style={s.e}></View>
            <View style={s.container}>
                <Text style={s.logo}>LOGO</Text>
                <SimpleLineIcons onPress={onOptionClick} style={s.option} name="options-vertical" size={24} color="black" />
            </View>
        </>
    )
}

const s = StyleSheet.create({
    e: {
        height: 20
    },
    container: {
        height: 70,
        borderBottomColor: "#CCC",
        borderBottomWidth: 0.5,
        flexDirection: "row"
    },
    logo: {
        lineHeight: 70,
        textAlign: "center",
        width: "100%"
    },
    option: {
        position: "absolute",
        right: 15,
        top: 15,
        padding: 15
    }
})
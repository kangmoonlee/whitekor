import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet, Text, View } from "react-native"
import { CustomHeader } from "../components"

const Stack = createNativeStackNavigator()
export default ({ view, editor }) => {
    return (
        <View style={s.container}>
            <CustomHeader />
            <Stack.Navigator
                screenOptions={{
                    // headerShown: false
                }}
            >
                <Stack.Screen name="view" component={view} />
                <Stack.Screen name="editor" component={editor} />
            </Stack.Navigator>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        flex: 1
    }
})
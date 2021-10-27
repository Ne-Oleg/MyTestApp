import { StyleSheet } from "react-native";

export const ProfileScreenStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 20, 
        marginTop: 50, 
        flex: 1
    },
    userBox: {
        flexDirection: 'row'
    },
    imageStyle: {
        height: 50, 
        width: 50, 
        borderRadius: 25, 
        marginRight: 10
    },
    buttonBox: {
        position: 'absolute', 
        bottom: 20, 
        left: 20, 
        width: '100%'
    },
    textContainer: {
        height: 50, 
        justifyContent: 'center'
    }
})
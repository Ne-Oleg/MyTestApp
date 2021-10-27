import { StyleSheet } from "react-native";

export const FeedScreenStyle = StyleSheet.create({
    container:{
        flex: 1, 
        paddingHorizontal: 10
    },
    itemContainer: {
        width: '100%', 
        height: 200, 
        marginBottom: 20, 
        borderRadius: 10
    },
    textContainer: {
        position: 'relative', 
        top: 170, 
        height: 30,
        width: '100%', 
        backgroundColor: 'black', 
        opacity: 0.4, 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10
    },
    textStyle: {
        color: 'white', 
        marginLeft: 10, 
        paddingVertical: 5
    },
    imageStyle:{
        borderRadius: 10
    }
})
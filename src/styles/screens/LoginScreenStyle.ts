import { StyleSheet } from "react-native";

export const LoginScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        backgroundColor: '#316B83',
        paddingTop: 100
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'column',
        marginBottom: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    errorText: {
        fontSize: 10,
        color: 'red',
    }
});
import { StyleSheet } from "react-native"



export const stylessContainer = StyleSheet.create({
    container: {
        backgroundColor: "#000000ff",
        flex: 1

    },

    containerCima: {
        width: "100%",
        height: "100%",
        position: "relative",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        zIndex: 8
    },

    containerBaixo: {
        backgroundColor: "#fff",
        width: "80%",
        height: "80%",
        position: 'absolute',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignContent: center,
        alignItems: center,
        zIndex: 10

    }

});
  

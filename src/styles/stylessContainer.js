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
        zIndex: 8
    },

    containerBaixo: {
        backgroundColor: "#fff",
        width: "80%",
        height: "95%",
        position: 'absolute',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 30,
        zIndex: 10

    }

});
  

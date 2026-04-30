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
        backgroundColor: "#858585ff",
        width: "100%",
        height: "65%",
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 30,
        alignItems: "center",
        alignContent: "center",
        zIndex: 10,
        padding:30,
        

    }

});
  

import { StyleSheet } from "react-native"





export const stylessButton = StyleSheet.create({


  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 60,
    borderRadius: 30,
    borderWidth: 0.2,
    borderColor: "#000000ff",
    borderBottomWidth: 8,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5
  },

  login: {
    backgroundColor: "rgba(173, 173, 173, 0.27)",
    borderColor: "rgba(39, 39, 45, 1)",
    shadowColor: "rgba(28, 30, 30, 1)",
  }
});
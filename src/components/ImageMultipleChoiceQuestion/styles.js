import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor: "red",
    alignSelf: "stretch",
  },
  optionsContainer: {
    width: "100%",
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
});

export default styles;

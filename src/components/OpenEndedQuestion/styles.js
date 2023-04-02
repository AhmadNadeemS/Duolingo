import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    // borderWidth: 2,
    // borderColor: "red",
    // alignSelf: "stretch",
    alignItems: "center",
    margin: 10,
  },
  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#ebebeb",
    alignSelf: "stretch",
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
  },
});

export default styles;

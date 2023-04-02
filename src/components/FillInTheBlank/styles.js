import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    // borderWidth: 2,
    // borderColor: "red",
    marginVertical: 10,
    height: 70,
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 16,
  },
  blank: {
    borderBottomWidth: 1,
    borderColor: "grey",
    width: 100,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export default styles;

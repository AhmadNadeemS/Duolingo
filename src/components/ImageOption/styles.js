import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    borderColor: "lightgrey",
    borderWidth: 2,
    borderRadius: 10,
    borderBottomWidth: 4,

    width: "48%",
    height: "48%",

    // flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },
  selectedText: {
    color: "#48BEF7",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontWeight: "bold",
  },
});

export default styles;

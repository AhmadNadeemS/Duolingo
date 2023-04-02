import { View, Text, StyleSheet, Image } from "react-native";
import ProgressBar from "../ProgressBar";
import heart from "../../../assets/images/heart.png";

const Header = ({ progress, lives }) => {
  return (
    <View style={styles.root}>
      <ProgressBar progress={progress} />
      <Image source={heart} style={styles.icon} />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    // borderColor: "red",
    // borderWidth: 2,
    width: 37,
    height: 30,
    marginHorizontal: 10,
  },
  lives: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Header;

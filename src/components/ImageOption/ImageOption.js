import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const ImageOption = ({ image, text, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : null,
      ]}
    >
      <Image
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text
        style={[styles.optionText, isSelected ? styles.selectedText : null]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
};

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
};

export default ImageOption;

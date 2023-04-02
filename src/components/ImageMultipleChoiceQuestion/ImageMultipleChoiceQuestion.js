import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, Alert } from "react-native";
import styles from "./styles";
import ImageOption from "../ImageOption";
import Button from "../Button";

const ImageMultipleChoiceQuestion = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);
  const onButtonPress = () => {
    if (selected.correct) {
      //   const nextIndex = currentQuestionIndex + 1;
      //   setCurrentQuestionIndex(nextIndex);
      onCorrect();
      setSelected(null);
    } else {
      //   Alert.alert("Wrong.!");
      onWrong();
    }
  };
  return (
    <>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map((option) => {
          return (
            <ImageOption
              key={option.id}
              image={option.image}
              text={option.text}
              isSelected={selected && selected.id === option.id}
              onPress={() => setSelected(option)}
            />
          );
        })}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

ImageMultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};
export default ImageMultipleChoiceQuestion;

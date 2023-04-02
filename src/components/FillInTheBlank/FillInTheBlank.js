import { Text } from "react-native";
import styles from "./styles";
import { View } from "react-native";
import Button from "../Button";
import WordOption from "../WordOption";
import { useState } from "react";
const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [parts, setParts] = useState(question.parts);
  const onButtonPress = () => {
    if (checkIfCorrect()) {
      onCorrect();
    } else {
      onWrong();
    }
    // setSelectedOption(null);
  };

  const addOptionsToSelected = (option) => {
    // const numberOfBlanks = question.parts.filter((part) => part.isBlank).length;
    // if (numberOfBlanks > selectedOptions.length) {
    //   setSelectedOptions([...selectedOptions, option]);
    // }
    if (isSelected(option)) {
      return;
    }
    const newParts = [...parts];
    for (let i = 0; i < newParts.length; i++) {
      if (newParts[i].isBlank && !newParts[i].selected) {
        newParts[i].selected = option;
        break;
      }
    }
    setParts(newParts);
  };

  const removeOptionFromSelected = (index) => {
    const newParts = [...parts];
    newParts[index].selected = null;
    setParts(newParts);
  };

  const isSelected = (option) => {
    return (
      parts.filter((part) => part.isBlank && part.selected === option).length >
      0
    );
  };

  const checkIfCorrect = () => {
    return (
      parts.filter((part) => part.isBlank && part.text !== part.selected)
        .length === 0
    );
  };
  //   const isReadyToCheck = () => {
  //     let v = parts.filter((part) => part.isBlank && !part.selected).length;

  //     console.log(v);
  //   };

  //   const checkIfCorrect = () => {
  //     const c = parts.filter(
  //       (part) => part.isBlank && part.selected !== part.text
  //     );
  //     console.log(c);
  //     // .length === 0;
  //     // return c;
  //   };
  const isReadyToCheck = () => {
    // return parts.filter((part) => part.isBlank && !part.selected).length > 0;
    return parts.filter((part) => part.isBlank && !part.selected).length > 0;
  };
  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>

      <View style={styles.row}>
        {parts.map((part, index) => {
          if (part.isBlank) {
            return (
              <View style={styles.blank}>
                {part.selected && (
                  <WordOption
                    key={index}
                    text={part?.selected}
                    onPress={() => removeOptionFromSelected(index)}
                  />
                )}
              </View>
            );
          } else {
            return <Text style={styles.text}>{part.text}</Text>;
          }
        })}
      </View>
      <View style={styles.optionsContainer}>
        {question?.options.map((option, index) => {
          //   console.log(option);
          return (
            <WordOption
              key={index}
              text={option}
              isSelected={isSelected(option)}
              onPress={() => addOptionsToSelected(option)}
            />
          );
        })}
      </View>
      <Button
        text="Check"
        onPress={onButtonPress}
        disabled={isReadyToCheck()}
      />
    </>
  );
};

export default FillInTheBlank;

// creates issues on removing item from an exact index. As second blank takes place of first one

// import { Text } from "react-native";
// import styles from "./styles";
// import { View } from "react-native";
// import Button from "../Button";
// import WordOption from "../WordOption";
// import { useState } from "react";
// const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   console.log(selectedOptions);
//   const onButtonPress = () => {
//     // if (selectedOption === question.correct) {
//     //   onCorrect();
//     // } else {
//     //   onWrong();
//     // }
//     // setSelectedOption(null);
//   };

//   const addOptionsToSelected = (option) => {
//     const numberOfBlanks = question.parts.filter((part) => part.isBlank).length;
//     if (numberOfBlanks > selectedOptions.length) {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   const removeOptionFromSelected = (option) => {
//     setSelectedOptions(
//       selectedOptions.filter((selectedOption) => selectedOption === option)
//     );
//   };
//   console.log(selectedOptions);
//   let blankIndex = -1;
//   return (
//     <>
//       <Text style={styles.title}>Complete the sentence</Text>

//       <View style={styles.row}>
//         {question?.parts.map((part, index) => {
//           if (part.isBlank) {
//             blankIndex += 1;
//             return (
//               <View style={styles.blank}>
//                 {selectedOptions.length > blankIndex && (
//                   <WordOption
//                     key={index}
//                     text={selectedOptions[blankIndex]}
//                     onPress={() =>
//                       removeOptionFromSelected(selectedOptions[blankIndex])
//                     }
//                   />
//                 )}
//               </View>
//             );
//           } else {
//             return <Text style={styles.text}>{part.text}</Text>;
//           }
//         })}
//       </View>
//       <View style={styles.optionsContainer}>
//         {question?.options.map((option, index) => {
//           //   console.log(option);
//           return (
//             <WordOption
//               key={index}
//               text={option}
//               isSelected={selectedOptions.includes(option)}
//               onPress={() => addOptionsToSelected(option)}
//             />
//           );
//         })}
//       </View>
//       <Button
//         text="Check"
//         onPress={onButtonPress}
//         disabled={!selectedOptions.length}
//       />
//     </>
//   );
// };

// export default FillInTheBlank;

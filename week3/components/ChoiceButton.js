import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CHOICES from '../choices';

const ChoiceButton = props => {
  return (
    <View>
      {CHOICES.map (choice => {
        return (
          <TouchableOpacity
            style={styles.buttonStyle}
            key={choice.name}
            onPress={() => props.onButtonPress (choice.name)}
          >
            <Text style={styles.buttonText}>{choice.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create ({
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
  },
  buttonText: {fontSize: 25, color: 'white', fontWeight: 'bold'},
});

export {ChoiceButton};

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChoiceButton} from './components/ChoiceButton';
import CHOICES from './choices';
import {ChoiceCard} from './components/ChoiceCard';
import {Header} from './components/Header';
import {randomComputerChoice, getRoundOutcome} from './utils';
export default class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      userChoice: {},
      computerChoice: {},
      result: 'Make your choice!',
    };
  }
  onChoicePress = choice => {
    const userChoice = CHOICES.find (item => item.name === choice);
    const computerChoice = randomComputerChoice ();
    const result = getRoundOutcome (userChoice.name, computerChoice.name);
    this.setState ({userChoice, computerChoice, result});
  };
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.messageWrapper}>
          <Header result={this.state.result} />
        </View>
        <View style={styles.gameWrapper}>
          <View style={styles.choicesContainer}>
            <ChoiceCard playerName="You" choice={this.state.userChoice} />
            <Text>VS</Text>
            <ChoiceCard
              playerName="Computer"
              choice={this.state.computerChoice}
            />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <ChoiceButton onButtonPress={this.onChoicePress} />
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  messageWrapper: {
    flex: 0.15,
    //backgroundColor: 'red',
  },
  buttonWrapper: {
    flex: 0.3,
    // backgroundColor: 'green',
  },
  gameWrapper: {
    flex: 0.55,
    //backgroundColor: 'blue',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {height: 5, width: 5},
  },
});

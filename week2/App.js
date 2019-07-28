import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Feather, AntDesign} from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerTab}>
          <AntDesign name="back" size={30} color="gray" />
          <Feather name="menu" size={30} color="gray" />
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.introWrapper}>
            <View style={styles.avatarWrapper}>
              <Image
                style={styles.avatarImage}
                source={require('./assets/avatar.jpg')}
              />
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.infoText}>
                <Text style={styles.nameText}>Zen Nguyen</Text>
                <Text style={styles.jobText}>Student</Text>
              </View>

              <View style={styles.infoButton}>
                <TouchableOpacity
                  style={[styles.followButton, styles.buttonShadow]}
                  onPress={() => {
                    Alert.alert('Followed!');
                  }}
                >
                  <Text style={{color: 'white'}}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.sendButton, styles.buttonShadow]}
                  onPress={() => {
                    Alert.alert('Message sent!');
                  }}
                >
                  <Feather name="send" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.countLikeWrapper}>
            <View style={styles.countLikeTile}>
              <Text style={styles.countLikeNumber}>210</Text>
              <Text style={styles.countLikeLabel}>Photos</Text>
            </View>
            <View style={styles.countLikeTile}>
              <Text style={styles.countLikeNumber}>15k</Text>
              <Text style={styles.countLikeLabel}>Followers</Text>
            </View>
            <View style={styles.countLikeTile}>
              <Text style={styles.countLikeNumber}>650</Text>
              <Text style={styles.countLikeLabel}>Followings</Text>
            </View>
          </View>
        </View>

        {/* gallery */}
        <View style={styles.galleryWrapper}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.imageWrapper} style={{paddingRight: 5}}>
              {imgData.slice(0, centerImgData).map(item => {
                return <Image source={item.imgSource} style={styles.image} />;
              })}
            </View>
            <View style={styles.imageWrapper} style={{paddingLeft: 5}}>
              {imgData.slice(centerImgData).map(item => {
                return <Image source={item.imgSource} style={styles.image} />;
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomTab}>
          <Feather name="send" size={30} color="gray" />
          <Feather name="plus" size={30} color="gray" />
          <Feather name="user" size={30} color="gray" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //bottom Tab
  headerTab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  bottomTab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 10,
  },
  headerContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  //intro Wrapper styles
  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sendButton: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,

    backgroundColor: 'rgb(71,113,246)',
    padding: 10,
  },
  followButton: {
    flex: 2,
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgb(120,213,250)',
  },
  jobText: {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    color: 'gray',
  },
  nameText: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  infoButton: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',

    //alignItems: 'center',
  },
  infoText: {
    flexDirection: 'column',
  },
  infoWrapper: {
    flex: 3,
    flexDirection: 'column',
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  avatarWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  introWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  //countLikeWrapper styles
  countLikeNumber: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 24,
    color: 'black',
  },
  countLikeLabel: {
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    color: 'gray',
  },
  countLikeTile: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countLikeWrapper: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  //imageWrapper styles
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  imageWrapper: {
    flexDirection: 'column',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  galleryWrapper: {
    flex: 5,
    alignItems: 'center',
  },
  //container styles
  container: {
    flex: 1,
  },
});

//images
const imgData = [
  {id: 1, imgSource: require('./assets/1.jpg')},
  {id: 2, imgSource: require('./assets/2.jpg')},
  {id: 3, imgSource: require('./assets/3.jpg')},
  {id: 4, imgSource: require('./assets/4.jpg')},
  {id: 5, imgSource: require('./assets/5.jpg')},
  {id: 6, imgSource: require('./assets/6.jpg')},
  {id: 7, imgSource: require('./assets/7.jpg')},
  {id: 8, imgSource: require('./assets/8.jpg')},
];
const centerImgData = Math.floor(imgData.length / 2);

//colors
const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
// skip this line if using Create React Native App
AppRegistry.registerComponent('App', () => App);

import React, {Component, memo, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      show1: false,

      textShown: -1,
      lengthMore: false,

      angle: '90deg',
      angle1: '90deg',

      count: 1,
      count1: 1,
    };
  }

  toggleNumberOfLines = index => {
    this.setState({
      textShown: this.state.textShown === index ? -1 : index,
    });
  };

  call_dropdown(count) {
    this.setState({count: count + 1});
    if (this.state.count % 2 != 0) {
      this.setState({angle: '-90deg', show: true});
    } else {
      this.setState({angle: '90deg', show: false});
    }
  }
  chap(count1) {
    this.setState({count1: count1 + 1});
    if (this.state.count1 % 2 != 0) {
      this.setState({angle1: '-90deg', show1: true});
    } else {
      this.setState({angle1: '90deg', show1: false});
    }
  }

  render(index) {
    return (
      <ScrollView style={styles.container}>
        <View style={{marginBottom: 50}}>
          <View style={styles.header}>
            <View style={styles.headerView}>
              <Image
                source={require('./Assets/Images/logo.jpg')}
                style={styles.image}
              />
            </View>
            <View style={styles.headerView}>
              <Text
                style={{
                  marginHorizontal: 15,
                  fontSize: 20,
                  color: '#171717',
                }}>
                How to clear FRA without coaching - Vision IAS
              </Text>
              <TouchableOpacity>
                <View style={styles.video}>
                  <Icon
                    name="play"
                    size={20}
                    color="#FD5D5D"
                    style={styles.icon}
                  />
                  <Text
                    style={{
                      justifyContent: 'flex-start',
                      //position: 'absolute',

                      alignSelf: 'center',
                      color: '#171717',
                      fontSize: 18,
                    }}>
                    10 videos
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={{marginHorizontal: 15}}>
            <Text style={{fontSize: 25, marginTop: 15}}>Introduction</Text>
            <Text
              numberOfLines={this.state.textShown === index ? undefined : 3}
              style={styles.intro}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown took galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text
              onPress={() => this.toggleNumberOfLines(index)}
              style={{lineHeight: 21, color: 'red'}}>
              {this.state.textShown === index ? 'See less' : 'See more'}
            </Text>
          </View>
          <View style={styles.topics}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                flex: 1 / 2,
              }}>
              <Text style={styles.title}>
                Fundamental Theorem of Arithmetic
              </Text>
              <TouchableOpacity
                style={{alignSelf: 'center', marginTop: 15}}
                onPress={() => {
                  this.call_dropdown(this.state.count);
                }}>
                <Image
                  source={require('./Assets/Images/rightBack.png')}
                  style={{
                    transform: [{rotate: this.state.angle}],
                    height: 15,
                    width: 30,
                    tintColor: '#262F56',
                  }}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>3 Tests</Text>

            {this.state.show ? (
              <ScrollView
                style={{
                  alignContent: 'center',
                  alignSelf: 'flex-start',
                  marginLeft: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 25,
                    marginTop: 15,
                  }}>
                  <Icon
                    name="unlock-alt"
                    size={20}
                    color="#00E29C"
                    style={styles.icon}
                  />

                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 10,
                      alignSelf: 'center',
                      fontFamily: 'OpenSans',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Prime factorization Exercise
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 25,
                    marginTop: 15,
                  }}>
                  <Icon
                    name="unlock-alt"
                    size={20}
                    color="#00E29C"
                    style={styles.icon}
                  />

                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 10,
                      alignSelf: 'center',
                      fontFamily: 'OpenSans',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Fill in the blanks
                  </Text>
                </View>
                <View style={{marginBottom: 15}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 25,
                      marginTop: 15,
                    }}>
                    <Icon
                      name="lock"
                      size={20}
                      color="#FD5D5D"
                      style={styles.icon}
                    />

                    <Text
                      style={{
                        color: 'black',
                        marginLeft: 10,
                        alignSelf: 'center',
                        fontFamily: 'OpenSans',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Match the following
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#808080',

                      left: -25,
                      alignSelf: 'center',
                      fontFamily: 'OpenSans',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    starts 14 March
                  </Text>
                </View>
              </ScrollView>
            ) : null}
          </View>
          <View style={styles.topics}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.title}>HCF and LCM</Text>
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  marginHorizontal: 15,
                  marginTop: 15,
                }}
                onPress={() => {
                  this.chap(this.state.count1);
                }}>
                <Image
                  source={require('./Assets/Images/rightBack.png')}
                  style={{
                    transform: [{rotate: this.state.angle1}],
                    height: 15,
                    width: 30,
                    tintColor: '#262F56',
                  }}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>10 Tests</Text>

            {this.state.show1 ? (
              <ScrollView
                style={{
                  alignContent: 'center',
                  alignSelf: 'flex-start',
                  marginLeft: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 25,
                    marginTop: 15,
                  }}>
                  <Icon
                    name="unlock-alt"
                    size={20}
                    color="#00E29C"
                    style={styles.icon}
                  />

                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 10,
                      alignSelf: 'center',
                      fontFamily: 'OpenSans',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Prime factorization Exercise
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 25,
                    marginTop: 15,
                  }}>
                  <Icon
                    name="unlock-alt"
                    size={20}
                    color="#00E29C"
                    style={styles.icon}
                  />

                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 10,
                      alignSelf: 'center',
                      fontFamily: 'OpenSans',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    Fill in the blanks
                  </Text>
                </View>
                <View style={{marginBottom: 15}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 25,
                      marginTop: 15,
                    }}>
                    <Icon
                      name="lock"
                      size={20}
                      color="#FD5D5D"
                      style={styles.icon}
                    />

                    <Text
                      style={{
                        color: 'black',
                        marginLeft: 10,
                        alignSelf: 'center',
                        fontFamily: 'OpenSans',
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      Match the following
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: '#808080',

                      left: -25,
                      alignSelf: 'center',
                      fontFamily: 'OpenSans',
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    starts 14 March
                  </Text>
                </View>
              </ScrollView>
            ) : null}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1 / 3,
    flexDirection: 'row',
    marginTop: 35,
    marginLeft: 20,
  },
  headerView: {
    flex: 1,
  },
  video: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginHorizontal: 15,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    borderColor: '#171717',
    borderWidth: 1,
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontFamily: 'OpenSans',
    margin: 20,
  },
  intro: {
    lineHeight: 25,
    fontSize: 18,
    color: '#808080',
    textAlign: 'justify',
  },
  separator: {
    marginTop: 20,
    marginHorizontal: 15,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#222222',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginVertical: 5,
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#0D66B5',
    marginRight: 16,
    marginLeft: 16,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    height: 55,
  },
  topics: {
    flex: 1,
    margin: 10,
    marginTop: 15,
    borderColor: 'black',
    backgroundColor: '#F3FAFF',
    borderRadius: 10,
    elevation: 3,
    // alignSelf: 'flex-start',
  },
  icon: {
    padding: 5,
    justifyContent: 'center',
  },
});

export default memo(App);

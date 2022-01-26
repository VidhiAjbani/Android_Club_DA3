import React from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';

const bgim = 'https://i.imgur.com/yLFPZRh.png'

export default class App extends React.Component {
  state = {
    counter: 0
  }

  increaseCounter = () => (
    this.setState({
      counter: this.state.counter + 1 
    })
  )


  render() {
  return (
    
    <View style={styles.bg}>
      <ImageBackground source= {{uri: bgim,}} style = {styles.bg}>
      <Text style={styles.text}>{this.state.counter}</Text>
      <Pressable
        onPress = {this.increaseCounter}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#109E93' : '#534CBB',
          },{width: 100}, {borderRadius: 100}, {height: 100}, {marginTop: 400}]}
      > 
        <Text style={styles.textplus}>+</Text>
      </Pressable>
      
      </ImageBackground>
    </View>
    
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textplus:  {
    textAlign: 'center',
    fontSize: 60,
    color: '#fff'
  },
  text:  {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff'
  },
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  
  }
});
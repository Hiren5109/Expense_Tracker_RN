/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App=()=>{
  return(
    <SafeAreaView  style={{backgroundColor:'lightgreen', height:'100%',width:'100%'}}>
      <View>
        <Text style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>This Is the Text Tab</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;

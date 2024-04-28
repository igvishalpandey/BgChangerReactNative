import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  const [randomBg, setRandomBg]= useState("#ffffff");
  const generateColor= ()=>{
    const hexRange= "0123456789ABCDEF";
    let color= "#";

    for(let i=0; i<6; i++){
      color += hexRange[Math.floor(Math.random()*16)];
    }
    setRandomBg(color);
  }

  return (
    <>
      <StatusBar backgroundColor={randomBg} />
      <View style={[styles.container, {backgroundColor: randomBg}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}> Press Me </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn : {
    borderRadius : 12,
    backgroundColor : "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnText : {
    fontSize: 24,
    color: '#ffffff',
    textTransform:'uppercase',
  }
});

export default App;

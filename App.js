import { Text, SafeAreaView, StyleSheet, input, view } from 'react-native';
import React, { useState, useEffect} from 'react'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [n1, setN1] = useState (0)
  const [n2, setN2] = useState (0)
  
   function calcular ()  {
     const result = parseFloat(n1) + parseFloat(n2)
     return document.getElementById("result").innerHTML = 'Resultado: ' + result;
  }


return (
  <view>
   <SafeAreaView style={styles.div}>
    <h1 style={styles.title}> CALCULADORA </h1>
    <input type='number' value={n1} onChange={(e) => setN1(e.target.value)} style={styles.input}/>
    <input type='number' value={n2} onChange={(e) => setN2(e.target.value) } style={styles.input}/>
    <input type='submit' value='Calcular' onClick={calcular} style={styles.button}/>
    <label id='result' style={styles.label}> </label>
    </SafeAreaView>
    </view>
  );
 } 


const styles = StyleSheet.create({
  div: {
    backgroundColor: '#b2dafa',
    color: '#5086c1',
    fontFamily: 'Sans-serif'
     
  },
  button : {
    color:'#5086c1',
    width: 150,
    borderRadius: 5,
    fontSize: 15,
    backgroundColor:  'white',
    marginTop: 10,
    marginLeft:3,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5
  },
  title: {
    textAlign: 'center',
  },

  label: {
    backgroundColor: 'white',
    fontSize: 20,
    color:'green'
  },

  input: {
    width: 200,
    borderRadius:3,
    borderStyle: 'none',
    marginBottom: 5,
    marginLeft: 5
  }
});


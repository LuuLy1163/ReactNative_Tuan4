import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from "react-native";

const C = () => {
  const [inputValue, setInputValue] = useState('');
  const [checkResults, setCheckResults] = useState({
    containsLowerCase: false,
    containsUpperCase: false,
    containsNumber: false,
    containsSpecialChar: false,
    length: 0,
  });

  const changeInput = (text) => {
    setInputValue(text);
  };

  const checkPass = () => {
    const containsLowerCase = /[a-z]/.test(inputValue);
    const containsUpperCase = /[A-Z]/.test(inputValue);
    const containsNumber = /[0-9]/.test(inputValue);
    const containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(inputValue);

    setCheckResults({
      containsLowerCase,
      containsUpperCase,
      containsNumber,
      containsSpecialChar,
      length: inputValue.length,
    });
  };

  return (
    <View style={styles.background}>
      <View style={styles.backgroundIn}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.passwordGenerator}>PASSWORD GENERATOR</Text>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <TextInput
            style={styles.txtpassword}
            placeholder="Nhập Password"
            value={inputValue}
            onChangeText={changeInput}
          />
        </View>
        <View style={{ flex: 2.5, justifyContent: 'space-between' }}>
          <View style={styles.check}>
            <Text style={styles.passwordLength}>Password length</Text>
            <View style={styles.rectangleView}>{checkResults.length}</View>
          </View>
          <View style={styles.check}>
            <Text style={styles.includeLowerCase}>Include lower case letters</Text>
            {checkResults.containsLowerCase ? <Image style={styles.rectangleView2} source={require('./assets/Group9.png')} /> : <View style={styles.rectangleView2} />}
          </View>
          <View style={styles.check}>
            <Text style={styles.includeLowerCase}>Include upcase letters</Text>
            {checkResults.containsUpperCase ? <Image style={styles.rectangleView2} source={require('./assets/Group9.png')} /> : <View style={styles.rectangleView2} />}
          </View>
          <View style={styles.check}>
            <Text style={styles.includeLowerCase}>Include number</Text>
            {checkResults.containsNumber ? <Image style={styles.rectangleView2} source={require('./assets/Group9.png')} /> : <View style={styles.rectangleView2} />}
          </View>
          <View style={styles.check}>
            <Text style={styles.includeLowerCase}>Include special symbol</Text>
            {checkResults.containsSpecialChar ? <Image style={styles.rectangleView2} source={require('./assets/Group9.png')} /> : <View style={styles.rectangleView2} />}
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity onPress={checkPass} style={styles.btngenerate}>
            <Text style={styles.generatePassword}>{`GENERATE PASSWORD `}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    padding: "5%",
    backgroundColor: "#6666FF"
  },
  backgroundIn: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    padding: "5%",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 15,
    backgroundColor: "#23235b",
    flex: 1,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  passwordGenerator: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: "#fff",
    textAlign: "center",
    width: 181,
    height: 64,
  },
  txtpassword: {
    backgroundColor: "#151537",
    width: "100%",
    height: 55,
    color: '#fff'
  },
  passwordLength: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: "#fff",
    textAlign: "left",
    width: 223,
    height: 24
  },
  rectangleView: {
    backgroundColor: "#fff",
    width: 98,
    height: 33,
    textAlign: 'center',
    justifyContent: 'center'
  },
  includeLowerCase: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: "#fff",
    textAlign: "left",
    width: 247,
    height: 27
  },
  rectangleView2: {
    backgroundColor: "#fff",
    width: 33,
    height: 33
  },
  check: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btngenerate: {
    backgroundColor: "#3b3b98",
    width: "100%",
    height: 65,
    justifyContent: 'center',
    alignItems: 'center'
  },
  generatePassword: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    color: "#fff",
    textAlign: "center",
    width: 259,
    height: 21
  }
});

export default C;

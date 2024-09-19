import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const C = () => {
  	
  	return (
    		<View style={styles.c}>
      			<View style={styles.background} />
      			<View style={styles.backgroundIn} />
      			<View style={[styles.txtpassword, styles.txtpasswordLayout]} />
      			<View style={[styles.btngenerate, styles.txtpasswordLayout]} />
      			<Text style={[styles.passwordGenerator, styles.passwordTypo]}>PASSWORD GENERATOR</Text>
      			<Text style={[styles.generatePassword, styles.passwordTypo]}>{`GENERATE PASSWORD `}</Text>
      			<Text style={[styles.passwordLength, styles.includeTypo]}>Password length</Text>
      			<Text style={[styles.includeUpcaseLetters, styles.includeTypo]}>Include upcase letters</Text>
      			<Text style={[styles.includeLowerCase, styles.includeTypo]}>Include lower case letters</Text>
      			<Text style={styles.includeNumber}>Include number</Text>
      			<Text style={[styles.includeSpecialSymbol, styles.includeTypo]}>Include special symbol</Text>
      			<View style={styles.cChild} />
      			<View style={[styles.cItem, styles.cItemLayout]} />
      			<View style={[styles.cInner, styles.cItemLayout]} />
      			<Image style={[styles.groupIcon, styles.cItemLayout]} resizeMode="cover" source="Group 9.png" />
      			<Image style={[styles.cChild1, styles.cItemLayout]} resizeMode="cover" source="Group 8.png" />
      			<View style={styles.frameView} />
    		</View>);
};

const styles = StyleSheet.create({
  	txtpasswordLayout: {
    		height: 55,
    		position: "absolute"
  	},
  	passwordTypo: {
    		textAlign: "center",
    		color: "#fff",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	includeTypo: {
    		textAlign: "left",
    		fontSize: 20,
    		left: 38,
    		color: "#fff",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	cItemLayout: {
    		width: 25,
    		left: 304,
    		height: 25,
    		position: "absolute"
  	},
  	background: {
    		top: 0,
    		left: 0,
    		width: 360,
    		position: "absolute",
    		height: 640
  	},
  	backgroundIn: {
    		top: 19,
    		left: 19,
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		borderRadius: 15,
    		backgroundColor: "#23235b",
    		width: 322,
    		height: 605,
    		position: "absolute"
  	},
  	txtpassword: {
    		top: 156,
    		left: 32,
    		backgroundColor: "#151537",
    		width: 297
  	},
  	btngenerate: {
    		top: 544,
    		left: 45,
    		backgroundColor: "#3b3b98",
    		width: 269
  	},
  	passwordGenerator: {
    		top: 59,
    		left: 80,
    		fontSize: 25,
    		width: 181,
    		height: 64
  	},
  	generatePassword: {
    		top: 561,
    		left: 55,
    		fontSize: 18,
    		width: 259,
    		height: 21
  	},
  	passwordLength: {
    		top: 264,
    		width: 223,
    		height: 24
  	},
  	includeUpcaseLetters: {
    		top: 379,
    		width: 206,
    		height: 26
  	},
  	includeLowerCase: {
    		top: 324,
    		width: 247,
    		height: 27
  	},
  	includeNumber: {
    		top: 433,
    		width: 160,
    		height: 25,
    		textAlign: "left",
    		fontSize: 20,
    		left: 38,
    		color: "#fff",
    		fontFamily: "Roboto-Bold",
    		fontWeight: "700",
    		position: "absolute"
  	},
  	includeSpecialSymbol: {
    		top: 486,
    		width: 213,
    		height: 31
  	},
  	cChild: {
    		top: 258,
    		left: 211,
    		width: 118,
    		height: 33,
    		position: "absolute",
    		backgroundColor: "#fff"
  	},
  	cItem: {
    		top: 373,
    		backgroundColor: "#fff"
  	},
  	cInner: {
    		top: 483,
    		backgroundColor: "#fff"
  	},
  	groupIcon: {
    		top: 318
  	},
  	cChild1: {
    		top: 428
  	},
  	frameView: {
    		top: 298,
    		left: 180,
    		width: 100,
    		height: 100,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	c: {
    		flex: 1,
    		width: "100%",
    		overflow: "hidden",
    		height: 640,
    		backgroundColor: "#fff"
  	}
});

export default C;

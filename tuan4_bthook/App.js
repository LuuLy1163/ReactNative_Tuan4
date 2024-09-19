import React, { useState } from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";

const TikiOk = () => {
  	const [diceRolls, setDiceRolls] = useState([1])
    const gia = 141.800
  	return (
    		<View style={styles.tikiOk}>
      			<View style={[styles.background, styles.backgroundPosition]} />
      			<View style={[styles.backgroundFragAbove, styles.backgroundPosition]} />
      			<Image style={styles.bookIcon} resizeMode="cover" source={require('./assets/book.png')} />
      			<Text style={[styles.nguynHmTch, styles.textTypo]}>Nguyên hàm tích phân và ứng dụng</Text>
      			<Text style={[styles.cungCpBi, styles.textTypo]}>Cung cấp bởi Tiki Trading</Text>
      			<Text style={[styles.text, styles.textTypo]}>{gia.toFixed(3)} đ</Text>
      			<Text style={[styles.text1, styles.text1Typo]}>{gia.toFixed(3)} đ</Text>
      			<View style={[styles.btnadd, styles.btnaddLayout]}  >
              <TouchableOpacity>
                	<Text style={[styles.btnaddChild, styles.btnaddLayout]} onPress={() => {
                  const newArr = diceRolls.map(item => item + 1)
                  setDiceRolls(newArr)
            }}> +</Text>
              </TouchableOpacity>
      			</View>
            {diceRolls.map((diceRoll, index) => (
              <Text style={[styles.text2, styles.textTypo]} key={index}> {diceRoll} </Text>
            ))}
      			<View style={[styles.btnminus, styles.btnaddLayout]}>
        				<TouchableOpacity>
                	<Text style={[styles.btnaddChild, styles.btnaddLayout]} onPress={() => {
                  if (diceRolls>0) {
                    const newArr = diceRolls.map(item => item - 1)
                  setDiceRolls(newArr)
                  }
            }}> -</Text>
              </TouchableOpacity>
      			</View>	
      			<Text style={[styles.muaSau, styles.textTypo]}>Mua sau</Text>
      			<Text style={[styles.xemTiY, styles.xemTiYTypo]}>Xem tại đây</Text>
      			<Text style={[styles.mGimGi, styles.xemTiYTypo]}>Mã giảm giá đã lưu</Text>
      			<View style={[styles.btnlogin, styles.btnloginLayout]} />
      			<Text style={[styles.mGimGi1, styles.textTypo]}>Mã giảm giá</Text>
      			<View style={[styles.yellowBlock, styles.btnaddLayout]} />
      			<View style={[styles.btnapdungParent, styles.btnapdungLayout]}>
        				<View style={[styles.btnapdung, styles.btnapdungLayout]} />
        				<Text style={[styles.pDng, styles.pDngTypo]}>Áp dụng</Text>
      			</View>
      			<View style={[styles.backGroundNhaptaiday, styles.backgroundTamtinhLayout]} />
      			<View style={[styles.backgroundTamtinh, styles.backgroundTamtinhLayout]} />
      			<Text style={[styles.bnCPhiu, styles.textTypo]}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        				<Text style={[styles.nhpTiY, styles.textTypo]}>Nhập tại đây?</Text>
          					<Text style={[styles.text3, styles.text3Typo]}>
                      {diceRolls.length === 0 || diceRolls.reduce((a, b) => a + b, 0) === 0 
                        ? '0 đ' 
                        : (gia * diceRolls.reduce((a, b) => a + b, 0)).toFixed(3) + ' đ'}
                    </Text>
          					<Text style={[styles.tmTnh, styles.text3Typo]}>Tạm tính</Text>
          					<View style={styles.backGroundTienhanhdathang} />
          					<Text style={[styles.thnhTin, styles.text1Typo]}>Thành tiền</Text>
          					<View style={[styles.btnlogin1, styles.btnloginLayout]} />
          					<Text style={[styles.tinHnhT, styles.pDngTypo]}>TIẾN HÀNH ĐẶT HÀNG</Text>
          					<Text style={styles.text4}>
                    {diceRolls.length === 0 || diceRolls.reduce((a, b) => a + b, 0) === 0 
                        ? '0 đ' 
                        : (gia * diceRolls.reduce((a, b) => a + b, 0)).toFixed(3) + ' đ'}
                    </Text>
          					<View style={styles.tikiOkItem} />
          					</View>);
        				};
        				
        				const styles = StyleSheet.create({
          					backgroundPosition: {
            						width: 360,
            						top: 0,
            						position: "absolute"
          					},
          					textTypo: {
            						textAlign: "center",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						position: "absolute"
          					},
          					text1Typo: {
            						color: "#808080",
            						textAlign: "center",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						position: "absolute"
          					},
          					btnaddLayout: {
            						height: 20,
            						position: "absolute"
          					},
          					xemTiYTypo: {
            						top: 162,
            						textAlign: "center",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						fontSize: 12,
            						position: "absolute"
          					},
          					btnloginLayout: {
            						height: 45,
            						borderRadius: 2,
            						left: 13,
            						position: "absolute"
          					},
          					btnapdungLayout: {
            						width: 99,
            						height: 45,
            						position: "absolute"
          					},
          					pDngTypo: {
            						color: "#fff",
            						fontSize: 20,
            						textAlign: "center",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						position: "absolute"
          					},
          					backgroundTamtinhLayout: {
            						height: 51,
            						width: 360,
            						position: "absolute",
            						backgroundColor: "#fff"
          					},
          					text3Typo: {
            						top: 370,
            						fontSize: 18,
            						textAlign: "center",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						position: "absolute"
          					},
          					background: {
            						backgroundColor: "#c4c4c4",
            						left: 0,
            						height: 640
          					},
          					backgroundFragAbove: {
            						height: 283,
            						left: 1,
            						backgroundColor: "#fff"
          					},
          					bookIcon: {
            						width: 104,
            						height: 127,
            						left: 13,
            						top: 14,
            						position: "absolute"
          					},
          					nguynHmTch: {
            						color: "#000",
            						textAlign: "center",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						fontSize: 12,
            						left: 142,
            						top: 14
          					},
          					cungCpBi: {
            						top: 42,
            						color: "#000",
            						textAlign: "center",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						fontSize: 12,
            						left: 142
          					},
          					text: {
            						top: 67,
            						color: "#ee0d0d",
            						fontSize: 18,
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						textAlign: "center",
            						left: 142
          					},
          					text1: {
            						top: 99,
            						fontSize: 12,
            						left: 142,
                        textDecorationLine: 'line-through'
          					},
          					text2: {
            						top: 123,
            						left: 167,
            						fontSize: 15,
            						color: "#000",
            						textAlign: "center",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700"
          					},
          					btnaddChild: {
            						width: 14,
            						height: 16,
            						backgroundColor: "#c4c4c4",
            						left: 0,
            						top: 0
          					},
          					btnadd: {
            						left: 187,
            						width: 14,
            						height: 16,
            						top: 124
          					},
          					btnminusItem: {
            						height: 8,
            						left: 3,
            						top: 9,
            						backgroundColor: "#808080"
          					},
          					btnminus: {
            						width: 14,
            						height: 16,
            						top: 124,
            						left: 142
          					},
          					muaSau: {
            						top: 125,
            						left: 293,
            						color: "#134fec",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						textAlign: "center",
            						fontSize: 12
          					},
          					xemTiY: {
            						left: 137,
            						color: "#134fec"
          					},
          					mGimGi: {
            						width: 107,
            						color: "#011627",
            						left: 13
          					},
          					btnlogin: {
            						backgroundColor: "rgba(229, 57, 53, 0)",
            						borderStyle: "solid",
            						borderColor: "#808080",
            						borderWidth: 1,
            						width: 208,
            						top: 211
          					},
          					mGimGi1: {
            						top: 223,
            						left: 67,
            						color: "#011627",
            						fontSize: 18,
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						textAlign: "center"
          					},
          					yellowBlock: {
            						top: 227,
            						left: 26,
            						backgroundColor: "#f2dd1b",
            						width: 32
          					},
          					btnapdung: {
            						backgroundColor: "#0a5eb7",
            						borderRadius: 2,
            						width: 99,
            						left: 0,
            						top: 0
          					},
          					pDng: {
            						top: 11,
            						left: 12
          					},
          					btnapdungParent: {
            						left: 245,
            						top: 211
          					},
          					backGroundNhaptaiday: {
            						top: 297,
            						left: 0
          					},
          					backgroundTamtinh: {
            						top: 360,
            						left: 1
          					},
          					bnCPhiu: {
            						top: 312,
            						width: 227,
            						color: "#011627",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						textAlign: "center",
            						fontSize: 12,
            						left: 13
          					},
          					nhpTiY: {
            						top: 313,
            						left: 245,
            						color: "#134fec",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						textAlign: "center",
            						fontSize: 12
          					},
          					text3: {
            						left: 245,
            						color: "#ee0d0d"
          					},
          					tmTnh: {
            						width: 73,
            						color: "#011627",
            						left: 13
          					},
          					backGroundTienhanhdathang: {
            						top: 520,
            						width: 361,
            						height: 120,
            						left: 0,
            						position: "absolute",
            						backgroundColor: "#fff"
          					},
          					thnhTin: {
            						top: 536,
            						width: 89,
            						fontSize: 18,
            						left: 13
          					},
          					btnlogin1: {
            						top: 578,
            						backgroundColor: "#e53935",
            						width: 331
          					},
          					tinHnhT: {
            						top: 589,
            						left: 75
          					},
          					text4: {
            						top: 534,
            						left: 249,
            						fontSize: 20,
            						color: "#ee0d0d",
            						textAlign: "center",
            						fontFamily: "Roboto-Bold",
            						fontWeight: "700",
            						position: "absolute"
          					},
          					tikiOkItem: {
            						top: -1,
            						left: 202,
            						width: 100,
            						height: 100,
            						position: "absolute",
            						overflow: "hidden"
          					},
          					tikiOk: {
            						flex: 1,
            						width: "100%",
            						overflow: "hidden",
            						height: 640,
            						backgroundColor: "#fff"
          					}
        				});
        				
        				export default TikiOk;
        				
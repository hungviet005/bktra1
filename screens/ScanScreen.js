import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Bottle */}
      <Image
        source={require("../image/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png")}
        style={styles.image}
      />

      {/* Back */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.back}>←</Text>
      </TouchableOpacity>

      {/* Scan frame */}
      <View style={styles.scanArea}>
        <View style={styles.scanFrame}>

          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />

        </View>
      </View>

      {/* Product card */}
      <View style={styles.bottomCard}>
        <Image
          source={require("../image/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png")}
          style={styles.smallImg}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.brand}>Lauren's</Text>
          <Text style={styles.name}>Orange Juice</Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8D9C5",
  },

  image: {
    position: "absolute",
    width: "130%",
    height: "130%",
    top: "-10%",
    left: "-15%",
    resizeMode: "contain",
  },

  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },

  back: {
    fontSize: 30,
  },

  scanArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  scanFrame: {
    width: "65%",
    height: "40%",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
  },

  corner: {
    position: "absolute",
    width: 60,
    height: 60,
    borderColor: "white",
  },

  topLeft: {
    top: -2,
    left: -2,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 20,
  },

  topRight: {
    top: -2,
    right: -2,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 20,
  },

  bottomLeft: {
    bottom: -2,
    left: -2,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 20,
  },

  bottomRight: {
    bottom: -2,
    right: -2,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 20,
  },

  bottomCard: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
  },

  smallImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },

  brand: {
    color: "gray",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  addBtn: {
    width: 45,
    height: 45,
    backgroundColor: "#4C6EF5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  plus: {
    color: "white",
    fontSize: 22,
  },
});
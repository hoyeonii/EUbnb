import { Text, SafeAreaView, FlatList, View, Image } from "react-native";
import { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { Card, HomeHeader, FocusedStatusBar } from "../components";

function Details({ route, navigation }) {
  const { data } = route.params;
  return (
    <View style={{ width: "100%", height: 300 }}>
      <Image
        source={data.image}
        style={{ width: "100%", height: "100%" }}
      ></Image>
      <Text>
        Details {data.name} {data.price}
      </Text>
    </View>
  );
}

export default Details;

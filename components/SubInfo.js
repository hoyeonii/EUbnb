import { View, Text } from "react-native";
import React from "react";
import { FONTS, SIZES } from "../constants";
import { RectButton } from "react-native-gesture-handler";

export const Title = () => {
  return (
    <View>
      <Text>Title</Text>
    </View>
  );
};

export const Price = () => {
  return (
    <View>
      <Text>$30</Text>
      <Text>2022/08/20-2022/08/22</Text>
    </View>
  );
};
export const City = () => {
  return (
    <View>
      <Text style={{ fontSize: SIZES.extraLarge }}>에어비앤비 양도</Text>
      <Text style={{ fontSize: SIZES.medium }}>
        Bussardweg 11, Leinfelden, Germany
      </Text>
    </View>
  );
};
export const SubInfo = ({ data }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Text>{data.price}</Text>
      <City />
      <Price />
    </View>
  );
};

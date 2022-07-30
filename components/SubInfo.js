import { View, Text } from "react-native";
import React from "react";
import { SIZES } from "../constants";

export const Title = () => {
  return (
    <View>
      <Text>Title</Text>
    </View>
  );
};

export const Price = () => {
  return (
    <View style={{ borderWidth: 6 }}>
      <Text>Price</Text>
      <Text>Duration</Text>
    </View>
  );
};
export const City = () => {
  return (
    <View>
      <Text>City</Text>
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <City />
      <Price />
    </View>
  );
};

import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import React from "react";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, Price, Title } from "./SubInfo";

const Card = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
        <RectButton
          bottom={10}
          right={10}
          handlePress={() => {
            navigation.navigate("Details", { data });
          }}
        />
      </View>
      <SubInfo data={data} />
    </View>
  );
};

export default Card;

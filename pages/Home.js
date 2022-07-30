import { Text, SafeAreaView, FlatList, View } from "react-native";
import { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { Card, HomeHeader, FocusedStatusBar } from "../components";

function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: "001F2D" }} />
          <Text>??ri</Text>
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;

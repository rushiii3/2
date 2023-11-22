import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, View, SafeAreaView, ScrollView } from "react-native";
import { COLORS, SIZES, icons, images } from "../constants";
import {
  Welcome,
  Popularjobs,
  Nearbyjobs,
  ScreenHeaderBtn,
} from "../components";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1,padding:SIZES.medium}}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

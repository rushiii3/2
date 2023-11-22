import React from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import styles from "./nearbyjobs.style";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { router } from "expo-router";
import useFetch from "../../../hooks/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
const Nearbyjobs = () => {
  const { Data, isLoading, errorT, refetch } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
  };
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View>
          <Text variant="titleLarge" style={{ fontWeight: "500" }}>
            Near by jobs
          </Text>
        </View>
        <View>
          <Button mode="text">
            <Text variant="bodyMedium">Show All</Text>
          </Button>
        </View>
      </View>

      <View style={{ width: "100%" }}>
        {isLoading ? (
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color={MD2Colors.red800}
          />
        ) : errorT ? (
          <Text>Something went wrong</Text>
        ) : (
          Data.map((value, key) => <NearbyJobCard jobs={value} key={key} handleCardPress={handleCardPress}/>)
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;

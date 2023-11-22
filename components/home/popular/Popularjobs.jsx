import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import styles from "./popularjobs.style";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFetch";
import { router } from "expo-router";
const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = useState();
  const { Data, isLoading, errorT, refetch } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
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
            Popular jobs
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
          <FlatList
            data={Data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            horizontal
            contentContainerStyle={{ columnGap: 15 }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;

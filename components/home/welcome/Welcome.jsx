import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import styles from "./welcome.style";
import { COLORS, icons } from "../../../constants";
import { IconButton, Button } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { router } from "expo-router";
const jobtypes = ["Full-time", "Part-time", "Contractor"];
const Welcome = () => {
  const [ActiveJob, setActiveJob] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text variant="titleMedium">Welcome Rushi</Text>
        <Text variant="headlineLarge">Find your perfect job</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          marginTop: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <TextInput
            label="What are you looking for?"
            style={{ backgroundColor: COLORS.white }}
            mode="outlined"
          />
        </View>

        <IconButton
          icon={icons.search}
          iconColor="white"
          size={30}
          onPress={() => console.log("Pressed")}
          style={{ backgroundColor: COLORS.tertiary }}
        />
      </View>
      <View style={{ width: "100%", marginTop: 10 }}>
        <FlatList
          data={jobtypes}
          renderItem={({ item }) => (
            <Button
              mode="outlined"
              buttonColor="white"
              textColor={ActiveJob == item ? "black" : "#C1C0C8"}
              onPress={() => {
                setActiveJob(item);
                router.push(`/search/${item}`);
              }}
              style={{
                marginTop: 5,
                borderColor: ActiveJob === item ? "black" : "#C1C0C8",
              }}
            >
              {item}
            </Button>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: 5 }}
        />
      </View>
    </View>
  );
};

export default Welcome;

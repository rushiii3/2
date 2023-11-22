import React from "react";
import { View } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  Icon,
  MD3Colors,
} from "react-native-paper";
import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ companyLogo, companyName, JobTtle, location }) => {
  return (
    <View style={{ width: "100%" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Avatar.Image
          size={150}
          source={{
            uri:
              companyLogo === null
                ? "https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Evergreen-Business-Logo.png"
                : companyLogo,
          }}
          style={{ backgroundColor: "White", borderColor: "black" }}
        />
      </View>
      <View
        style={{ justifyContent: "center", alignItems: "center", marginTop: 5 }}
      >
        <Text variant="titleLarge" style={{ fontWeight: 700 }}>
          {JobTtle}
        </Text>
        <View style={{flexDirection:"row"}}>
          <Text variant="bodyMedium">{companyName} | </Text>
          <Icon source={icons.location} color="black" size={25} />
          <Text variant="bodyMedium">{location} </Text>
        </View>
      </View>
    </View>
  );
};

export default Company;

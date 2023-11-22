import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({jobs,handleCardPress}) => {
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity onPress={() => handleCardPress(jobs)}>
        <Card style={{ marginTop: 20 }}>
          <Card.Title
            title={jobs.employer_name}
            subtitle={jobs.job_title}
            left={(props) => <Avatar.Image size={44} {...props} source={{uri: jobs.employer_logo===null ? ('https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Evergreen-Business-Logo.png') : (jobs.employer_logo)}} style={{backgroundColor:"White",borderColor:"black"}}/>}
          />
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default NearbyJobCard;

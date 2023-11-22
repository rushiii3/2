import React from "react";
import { Image, View } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import styles from "./popularjobcard.style";

const PopularJobCard = ({item,handleCardPress,selectedJob}) => {
  return (
    <View style={{padding:1}}>
      <Button mode="text" onPress={() => handleCardPress(item)}>
    
  
      <Card style={{width:250}}>
        <Card.Title
          left={(props) => <Avatar.Image size={44} {...props} source={{uri: item.employer_logo===null ? ('https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Evergreen-Business-Logo.png') : (item.employer_logo)}} style={{backgroundColor:"White",borderColor:"black"}}/>}
          right={(props) => <Text {...props} style={{marginRight:20}}>{item.job_is_remote ? ('Remote') : ('Office')}</Text>}

        />
        <Card.Content>
          <Text variant="titleLarge">{item.employer_name}</Text>
          <Text variant="bodyLarge" numberOfLines={1}>{item.job_title}</Text>
          <Text variant="labelMedium" style={{marginTop:5}}>{item.job_country}</Text>

        </Card.Content>
      </Card>
      </Button>
    </View>
  );
};

export default PopularJobCard;

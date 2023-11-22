import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import useFetch from "../../hooks/useFetch";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { icons } from "../../constants";
const Jobdetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const { Data, isLoading, errorT, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [refreshing, setrefreshing] = useState(false);
  const onRefresh = () => {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
        //   headerBackVisible: false,
          headerTitle: "",
        //   headerLeft: () => (
        //     <ScreenHeaderBtn
        //       iconUrl={icons.left}
        //       dimension="60%"
        //       handlepress={() => router.back()}
        //     />
        //   ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
        }}
      />
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {isLoading ? (
                
              <ActivityIndicator
                animating={isLoading}
                size="large"
                color={MD2Colors.red800}
              />
            ) : errorT ? (
              <Text>SomeThing Went wrong</Text>
            ) : Data.length === 0 ? (
              <Text>No Data Found</Text>
            ) : (
              <View style={{padding:5,paddingBottom:100}}>
                <Company companyLogo={Data[0].employer_logo} companyName={Data[0].employer_name} JobTtle={Data[0].job_title} location={Data[0].job_country}/>
                <JobTabs />

              </View>
            )}
          </ScrollView>
        </>
     
    </SafeAreaView>
  );
};

export default Jobdetails;

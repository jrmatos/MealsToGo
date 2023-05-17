import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margintop: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(SafeAreaView)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search restaurant" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard
          restaurant={{ isOpenNow: true, isClosedTemporarily: true }}
        />
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

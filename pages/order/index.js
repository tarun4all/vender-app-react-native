import React, { useEffect } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useQuery } from "@apollo/client";

import { GET_ALL_ORDERS_QUERY } from "../../sdk/graphqlPayloads/order";
import OrderCard from "./OrderCard";
import OverlayLoader from "../../components/OverlayLoader";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default function Order() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_ORDERS_QUERY);
  const [refreshing, setRefreshing] = React.useState(false);

  const refetchOrders = async () => {
    const res = await refetch();
    console.log(res);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetchOrders();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  console.log({ data, loading, error: error, refetch });
  console.log(JSON.stringify(error, null, 2));
  useEffect(() => {
    console.log("here");
  }, []);

  if (loading) return <OverlayLoader />;
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <>
          {data?.getOrders?.map(
            (
              {
                description,
                category,
                quantity,
                subCategory,
                approxOrderValue,
                maxOrderValue,
                created_at,
              },
              i
            ) => (
              <OrderCard
                key={`order-card-${i}`}
                description={description}
                subCategory={subCategory}
                category={category}
                approxOrderValue={approxOrderValue}
                quantity={quantity}
                maxOrderValue={maxOrderValue}
                created_at={created_at}
              />
            )
          )}
        </>
        <Text style={styles.refreshContent} h4>
          Pull down to Refresh Orders
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputDiv: {
    width: "80%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  refreshContent: {
    marginTop: 10,
    color: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
});

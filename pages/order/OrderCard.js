import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Chip, Icon } from "react-native-elements";
import moment from "moment";

const DetailContent = ({ title, value }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.detailContentTitle}>{value}</Text>
      <Text style={styles.greyText}>{title}</Text>
    </View>
  );
};

const CardContent = ({ approxOrderValue, category, subCategory }) => {
  return (
    <View
      style={[
        { justifyContent: "space-between", flexDirection: "row" },
        styles.elementsContainer,
      ]}
    >
      <DetailContent value={`${approxOrderValue} INR`} title={"Budget"} />
      <DetailContent value={category} title={"Category"} />
      <DetailContent value={subCategory} title={"Sub Category"} />
    </View>
  );
};

const CardTitle = ({ description, createAt }) => {
  return (
    <View style={styles.elementsContainer}>
      <View
        style={[
          { justifyContent: "space-between", flexDirection: "row" },
          styles.elementsContainer,
        ]}
      >
        <View>
          <Text
            numberOfLines={1}
            style={[styles.detailContentTitle, { fontSize: 24, width: 300 }]}
          >
            {description}
          </Text>
          <Text style={[styles.greyText]}>Posted on {createAt}</Text>
        </View>
        <View
          style={[
            { justifyContent: "flex-end", flexDirection: "row" },
            styles.elementsContainer,
          ]}
        >
          <Icon
            name="dislike2"
            type="ant-design"
            color="#f50"
            onPress={() => alert("Feature coming soon.")}
          />
          <Icon
            style={{ marginLeft: 20 }}
            name="hearto"
            type="ant-design"
            color="#f50"
            onPress={() => alert("Feature coming soon.")}
          />
        </View>
      </View>
    </View>
  );
};

const TAG_LIMIT = 4;
export default function OrderCard({
  description,
  category,
  subCategory,
  created_at,
  approxOrderValue,
}) {
  const createAt = moment(Number(created_at)).format("MMM Do YY");
  const tags = [
    "Stationary",
    "Delhi",
    "New Delhi",
    "Vender",
    "Azadpur",
    "Model Town",
  ];
  return (
    <View style={styles.mainDiv}>
      <CardTitle description={description} createAt={createAt} />
      <CardContent
        approxOrderValue={approxOrderValue}
        category={category}
        subCategory={subCategory}
      />
      <View style={[{ flexDirection: "row" }, styles.elementsContainer]}>
        {tags.slice(0, TAG_LIMIT).map((tag) => (
          <Chip
            key={`tag-${tag}`}
            style={{ width: 10, marginLeft: 15 }}
            title={tag}
          />
        ))}
        <Chip
          key={`tag-last-5`}
          style={{ width: 10 }}
          title={`+ ${tags.length - TAG_LIMIT} More`}
        />
      </View>
      <View
        style={[
          { flexDirection: "row", alignContent: "center", marginTop: 1 },
          styles.elementsContainer,
        ]}
      >
        <Icon name="verified" type="octicons" />
        <Text style={styles.greyText}>Payment Unverified</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    height: 240,
    width: "100%",
    backgroundColor: "#faf7f7",
    borderWidth: 0.3,
    padding: 10,
    marginTop: 20,
  },
  greyText: {
    color: "grey",
  },
  content: {
    flex: 0.3,
    flexDirection: "column",
  },
  elementsContainer: {
    flex: 1,
  },
  detailContentTitle: {
    fontWeight: "bold",
  },
});

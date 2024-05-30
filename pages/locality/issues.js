import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import SingleCard from "./single-card";
import { issueData } from "./utils";
import { isEmpty } from "lodash";
import {
  ContactDispatchers,
  ContactSelectors,
} from "../../store/features/contact";

const Issues = ({ activeTag }) => {
  const { updateLocalBanner, setIssueList } = ContactDispatchers();
  const { localBanner, issueList } = ContactSelectors();

  useEffect(()=>{
   setIssueList(issueData)
  },[])

  const handleVoteUpdate = (itemIdx, firstTap) => {
    const updatedIssues = { ...issueList };
    updatedIssues[activeTag][itemIdx].vote += 1;

    const sortedIssues = [...updatedIssues[activeTag]].sort((a, b) => b.vote - a.vote);

    const hasOrderChanged = sortedIssues.some((issue, index) => issue !== updatedIssues[activeTag][index]);

    updatedIssues[activeTag] = sortedIssues;
    setIssueList(updatedIssues);

    if (hasOrderChanged && firstTap) {
      ToastAndroid.show("Issue updated based on votes.", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={{ marginTop: 6 }}>
      {isEmpty(issueList[activeTag]) ? (
        <View
          style={{
            marginTop: 40,
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/no-data.png")}
            style={{
              width: 130,
              height: 130,
              objectFit: "cover",
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontWeight: "600",
            }}
          >
            No Issue Found
          </Text>
        </View>
      ) : (
        <>
          {activeTag === "completed" && localBanner && (
            <View style={styles.banner}>
              <Text style={styles.bannerText}>
                Click on the card to view the resolved issue
              </Text>
              <TouchableOpacity onPress={() => updateLocalBanner(false)}>
                <Image
                  source={require("../../assets/cross.png")}
                  style={{ width: 22, height: 22 }}
                />
              </TouchableOpacity>
            </View>
          )}
          {issueList[activeTag].map((data, index) => {
            return <SingleCard activeTag={activeTag} handleVoteUpdate={handleVoteUpdate} item={data} itemIdx={index} key={index} />;
          })}
        </>
      )}
    </View>
  );
};

export default Issues;

const styles = StyleSheet.create({
  container: {
    position: "sticky",
    zIndex: 999999,
    top: 0,
    marginBottom: 4,
  },
  heading: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    marginBottom: 6,
  },
  heading2: {
    fontSize: 14,
    color: "#676D75",
    fontWeight: "600",
    marginBottom: 6,
  },
  banner: {
    padding: 10,
    backgroundColor: "#CBF0C7",
    borderRadius: 12,
    color: "#09b29c",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bannerText: {
    color: "#256C1D",
    fontWeight: "700",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const colors = [
  "#e0f7fa",
  "#f1f8e9",
  "#fff3e0",
  "#f3e5f5",
  "#d1c4e9",
];

const initialData = [
  {
    id: 1,
    user: {
      name: "Avinash",
      image: require("../../assets/avinash.jpeg"),
    },
    text: "This pothole has been here for weeks!",
    timestamp: "2024-05-17T12:34:56Z",
  },
  {
    id: 2,
    user: {
      name: "Anurag",
      image: require("../../assets/anurag.jpeg"),
    },
    text: "It's causing a lot of traffic.",
    timestamp: "2024-05-17T13:01:22Z",
  },
];

const Discussion = () => {
  const [discussion, setDiscussion] = useState(initialData);
  const [newComment, setNewComment] = useState("");

  const handlePostComment = () => {
    const user = {
      name: "You",
      image: require("../../assets/profilePicBlue.png"),
    };

    const newDiscussion = {
      id: discussion.length + 1,
      user: user,
      text: newComment,
      timestamp: new Date().toISOString(),
    };

    setDiscussion([...discussion, newDiscussion]);
    setNewComment("");

    // Close the keyboard
    Keyboard.dismiss();
  };

  const renderItem = ({ item, index }) => {
    const isCurrentUser = item.user.name === "You";

    return (
      <View
        style={[
          styles.commentContainer,
          {
            backgroundColor: isCurrentUser ? "#e1bee7" : colors[index % colors.length],
          },
          isCurrentUser ? styles.currentUserComment : styles.otherUserComment,
        ]}
      >
        {!isCurrentUser && (
          <Image source={item.user.image} style={styles.userImage} />
        )}
        <View
          style={[
            styles.commentTextContainer,
            isCurrentUser
              ? styles.currentUserTextContainer
              : styles.otherUserTextContainer,
          ]}
        >
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.commentText}>{item.text}</Text>
          <Text style={styles.timestamp}>
            {new Date(item.timestamp).toLocaleString()}
          </Text>
        </View>
        {isCurrentUser && (
          <Image source={item.user.image} style={styles.userImage} />
        )}
      </View>
    );
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.issueText}>Discussion</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={discussion}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your comment..."
            value={newComment}
            onChangeText={setNewComment}
          />
          <TouchableOpacity
            onPress={handlePostComment}
            style={styles.postButton}
          >
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: "#252A32",
    backgroundColor: "black",
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 16,
    paddingVertical: 14,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  issueText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 24,
  },
  commentContainer: {
    flexDirection: "row",
    marginBottom: 16,
    padding: 8,
    paddingVertical: 6,
    borderRadius: 16,
    maxWidth: "75%",
    alignSelf: "flex-start",
  },
  currentUserComment: {
    alignSelf: "flex-end",
    flexDirection: "row-reverse",
  },
  otherUserComment: {
    alignSelf: "flex-start",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  commentTextContainer: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
  },
  currentUserTextContainer: {
    alignItems: "flex-end",
  },
  otherUserTextContainer: {
    alignItems: "flex-start",
  },
  userName: {
    fontWeight: "bold",
    color: "#333",
  },
  commentText: {
    color: "#555",
    marginTop: 4,
  },
  timestamp: {
    color: "#999",
    fontSize: 12,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  postButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Discussion;

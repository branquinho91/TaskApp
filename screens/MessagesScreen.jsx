import React from "react";
import { View, Text } from "react-native";

const MessagesScreen = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        There are no recent messages.
      </Text>
    </View>
  );
};

export default MessagesScreen;

import React from "react";
import { View, Text } from "react-native";

const LastActivityScreen = () => {
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
        There are no recent activities.
      </Text>
    </View>
  );
};

export default LastActivityScreen;

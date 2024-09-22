import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import TaskScreen from "./screens/TasksScreen";
import MessagesScreen from "./screens/MessagesScreen";
import LastActivityScreen from "./screens/LastActivityScreen";

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <StatusBar backgroundColor="#694fad" />
        <Tab.Navigator initialRouteName="Tasks" activeColor="#ffffff" inactiveColor="#b0b0b0" barStyle={styles.tabBar}>
          <Tab.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              tabBarLabel: "Messages",
              tabBarIcon: ({ color }) => <Icon name="chatbubbles" color={color} size={26} />,
            }}
          />
          <Tab.Screen
            name="Tasks"
            component={TaskScreen}
            options={{
              tabBarLabel: "Tasks",
              tabBarIcon: ({ color }) => <Icon name="checkmark-done" color={color} size={26} />,
            }}
          />
          <Tab.Screen
            name="Last Activity"
            component={LastActivityScreen}
            options={{
              tabBarLabel: "Last Activity",
              tabBarIcon: ({ color }) => <Icon name="time" color={color} size={26} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#694fad",
    height: 60,
    marginBottom: 15,
  },
});

export default App;

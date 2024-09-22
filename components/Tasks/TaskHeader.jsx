import { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { today } from "./taskList";

const TaskHeader = () => {
  const handlePress = () => {};
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Today's Tasks</Text>
        <Text style={styles.date}>{today}</Text>
      </View>
      <View>
        <Pressable
          style={[styles.button, isHovered && styles.buttonHovered]}
          onPress={handlePress}
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
        >
          <Text style={styles.buttonText}>+ New Task</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    fontSize: 16,
    textAlign: "center",
    color: "#888",
  },
  button: {
    backgroundColor: "#694fad",
    padding: 10,
    borderRadius: 5,
    transition: "background-color 0.5s ease",
  },
  buttonHovered: {
    backgroundColor: "#3498db",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default TaskHeader;

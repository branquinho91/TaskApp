import { useState } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import Task from "../components/Task";
import NewTask from "../components/NewTask";
import { tasks, today } from "../tasks/task";

const TaskScreen = () => {
  const handlePress = () => {};
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Header */}
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

      {/* Filter Tasks */}

      <View></View>

      {/* TaskList rendering */}
      <ScrollView>
        {tasks.map((task, index) => (
          <Task key={index} name={task.name} description={task.description} status={task.status} date={task.date} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = {
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
};

export default TaskScreen;

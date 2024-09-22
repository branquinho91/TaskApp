import React from "react";
import { Text, View, ScrollView } from "react-native";
import Task from "../components/Task";
import { tasks, today } from "../tasks/task";

const TaskScreen = () => {
  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Tasks</Text>
          <Text style={styles.date}>{today}</Text>
        </View>
        <View>

        </View>
      </View>

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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  date: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
};

export default TaskScreen;

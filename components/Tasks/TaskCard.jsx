import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CustomCheckbox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <View style={styles.checkMark} />}
      </View>
    </TouchableOpacity>
  );
};

const TaskCard = ({ name, description, status, date, onStatusChange }) => {
  const [checked, setChecked] = useState(status === "Completed");
  const [isHovered, setIsHovered] = useState(false);

  const handlePress = () => {
    const newStatus = checked ? "Pending" : "Completed";
    setChecked(!checked);
    onStatusChange(newStatus);
  };

  return (
    <View style={styles.card}>
      <View style={styles.taskInfo}>
        <Text style={[styles.name, checked && styles.strikeThrough]}>{name}</Text>
        <Text style={[styles.description, checked && styles.strikeThrough]}>{description}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.statusContainer}>
        <CustomCheckbox checked={checked} onPress={handlePress} />
        <TouchableOpacity onPressIn={() => setIsHovered(true)} onPressOut={() => setIsHovered(false)}>
          <Image source={require("../../assets/trash-can.png")} style={[styles.deleteIcon, isHovered && styles.deleteIconHovered]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  taskInfo: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  statusContainer: {
    alignItems: "flex-start",
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#694fad",
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#694fad",
  },
  deleteIcon: {
    width: 30,
    height: 30,
    marginTop: 22,
  },
  deleteIconHovered: {
    opacity: 0.8,
  },
  checkMark: {
    width: 14,
    height: 14,
    backgroundColor: "#fff",
    borderRadius: 14,
  },
  strikeThrough: {
    textDecorationLine: "line-through",
    color: "#aaa",
  },
});

export default TaskCard;

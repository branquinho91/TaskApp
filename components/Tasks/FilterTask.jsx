import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { taskList } from "./taskList";

const FilterTask = ({ selectedFilter, handleFilter, pendingCount, completedCount, totalCount }) => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity onPress={() => handleFilter("All")}>
        <Text style={[styles.filterText, selectedFilter === "All" && styles.activeFilter]}>All ({totalCount})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFilter("Pending")}>
        <Text style={[styles.filterText, selectedFilter === "Pending" && styles.activeFilter]}>Pending ({pendingCount})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleFilter("Completed")}>
        <Text style={[styles.filterText, selectedFilter === "Completed" && styles.activeFilter]}>Completed ({completedCount})</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  filterText: {
    fontSize: 16,
    color: "#000",
  },
  activeFilter: {
    fontWeight: "bold",
  },
});

export default FilterTask;

import { ScrollView } from "react-native";
import TaskHeader from "../components/Tasks/TaskHeader";
import FilterTask from "../components/Tasks/FilterTask";
import TaskCard from "../components/Tasks/TaskCard";
import { taskList as initialTaskList } from "../components/Tasks/taskList";
import NewTaskModal from "../components/Tasks/NewTaskModal";
import { useState, useEffect } from "react";

const TaskScreen = () => {
  const [tasks, setTasks] = useState(initialTaskList);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === "All") {
      return true;
    } else if (selectedFilter === "Pending") {
      return task.status === "Pending";
    } else if (selectedFilter === "Completed") {
      return task.status === "Completed";
    }
  });

  const pendingCount = tasks.filter((task) => task.status === "Pending").length;
  const completedCount = tasks.filter((task) => task.status === "Completed").length;

  return (
    <>
      <TaskHeader />
      <FilterTask
        selectedFilter={selectedFilter}
        handleFilter={handleFilter}
        pendingCount={pendingCount}
        completedCount={completedCount}
        totalCount={tasks.length}
      />

      <ScrollView>
        {filteredTasks.map((task, index) => (
          <TaskCard
            key={index}
            name={task.name}
            description={task.description}
            status={task.status}
            date={task.date}
            onStatusChange={(newStatus) => {
              const updatedTasks = tasks.map((t) => (t.name === task.name ? { ...t, status: newStatus } : t));
              setTasks(updatedTasks);
            }}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default TaskScreen;

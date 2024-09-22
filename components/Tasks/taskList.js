const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const taskList = [
  {
    name: "Grocery Shopping",
    description: "Make a list and go to the store.",
    status: "Pending",
    date: today,
  },
  {
    name: "Study React Native",
    description: "Complete the modules of the online course.",
    status: "Completed",
    date: today,
  },
  {
    name: "Team Meeting",
    description: "Discuss goals for the next sprint.",
    status: "Pending",
    date: today,
  },
  {
    name: "Prepare Presentation",
    description: "Create slides for the project presentation.",
    status: "Completed",
    date: today,
  },
  {
    name: "Workout",
    description: "Strength training and stretching.",
    status: "Completed",
    date: today,
  },
  {
    name: "Read a Book",
    description: "Finish reading the current book.",
    status: "Pending",
    date: today,
  },
  {
    name: "Clean the House",
    description: "Tidy up all rooms and organize the living space.",
    status: "Completed",
    date: today,
  },
];

export { taskList, today };

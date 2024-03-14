import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectedCategory = (event) => {
    if (event.target.value === "All") {
      setTasks(TASKS); // Reset tasks to initial state if "All" is selected
    } else {
      const visibleTasks = tasks.filter(
        (task) => task.category === event.target.value
      );
      setTasks(visibleTasks);
    }
    setSelectedCategory(event.target.value);
  };

  const handleDeleteTask = (event) => {
    const newTasks = tasks.filter((task) => task.text !== event.target.value);
    setTasks(newTasks);
  };


  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES.filter((category) => category !== "All")} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("Code")

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      text: name,
      category: category
    }
    onTaskFormSubmit(newTask)
  }

  const renderCategories = categories.map((category) => {
    return <option key={category}>{category}</option>;
  });


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

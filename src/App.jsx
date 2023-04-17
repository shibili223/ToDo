import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Board from "./component/Board";
import Footer from "./component/Footer";
import Form from "./component/Form";
import "./styles/style.scss";
import { data } from "./utils/data.js";

function App() {
  const [tasks, setTasks] = useState(data.tasks);

  const addTask = (userIput) => {
    // console.log(taskName)
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        category: "pending",
        task: userIput,
      },
    ]);
  };

  const handleDelete = (item) => {
    // debugger
    const index = tasks.findIndex((x) => x.id === item.id);
    const clone = [...tasks];
    clone.splice(index, 1);
    setTasks(clone);
  };

  const handleMove = (item) => {
    const index = tasks.findIndex((x) => item.id === x.id);
    const clone = [...tasks];
    if (item.category === "pending") {
      clone[index].category = "ongoing";
    } else if (item.category === "ongoing") {
      clone[index].category = "completed";
    }
    setTasks(clone);
  };

  return (
    <div className="App">
      <Header />
      <Form addTask={addTask} />
      <Board tasks={tasks} handleDelete={handleDelete} handleMove={handleMove} />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import projects from "./data/projects";
import FilterBar from "./components/FilterBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

const TECH_OPTIONS = ["All", "React", "JavaScript", "HTML", "CSS"];

function App() {
  const [filter, setFilter] = useState("All");

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tech.includes(filter));

  return (
    <div className="app">
            <h1>
        Portfolio <span className="script">Gallery</span>
      </h1>
      <FilterBar
        options={TECH_OPTIONS}
        selected={filter}
        onSelect={setFilter}
      />
      <ProjectList projects={visibleProjects} />
    </div>
  );
}

export default App;
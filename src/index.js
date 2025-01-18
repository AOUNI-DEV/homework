import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Avatar() {
  return (
    <div>
      <img src="hamma.jpg" alt="hammaa" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <p>
        Passionate about web development, I master HTML, CSS and JavaScript
        technologies to create modern, responsive and ergonomic user interfaces.
        My expertise in Angular allows me to develop dynamic and modular web
        applications. In the back-end, I work with PHP for server management and
        business logic, and SQL for the design and optimization of relational
        databases. With these skills, I am able to take charge of complete
        projects, from design to production, while ensuring the performance and
        security of the solutions developed.
      </p>
    </div>
  );
}
function List() {
  return (
    <div>
      <SkillList frontend="HTML+CSS+JavaScript" />
      <SkillList progLang="C+Java+Python+PHP+SQL" />
      <SkillList framework="Angular+Laravel" />
      <SkillList gh="Git+GitHub" />
    </div>
  );
}
function SkillList(props) {
  return (
    <div>
      <span>{props.frontend}</span>
      <span>{props.progLang}</span>
      <span>{props.framework}</span>
      <span>{props.gh}</span>
    </div>
  );
}
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <List />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1661955657913-510565d33ba2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "Satisfied",
      color: "green"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
      intro: "",
      tag: "Underserved",
      color: "blue"
    },
    {
      img: "https://images.unsplash.com/photo-1760497925596-a6462350c583?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      intro: "",
      tag: "Underbanked",
      color: "red"
    },
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "satisfied",
      color: "gray"
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "underbanked",
      color: "green"
    },
    {
      img: "https://images.unsplash.com/photo-1748785826435-83c5062a5737?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "experienced",
      color: "skyblue"
    },
    
  ];

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;

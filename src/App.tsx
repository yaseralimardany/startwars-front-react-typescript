import React from 'react';
import './App.css';
import PeopleList from "./component/peopleList/peopleList";

function App() {
  return (
    <div className={"container"}>
      <h1 className={"page_header"}>Welcome to Star Wars application</h1>
      <PeopleList />
    </div>
  );
}

export default App;

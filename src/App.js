import React from "react";
import TodoList from "./TodoList";
import { LanguageContext } from "./LanguageContext"

class App extends React.Component {
  state = {
    language: "en",
  }

  handleContext = (event) => {
    this.setState(() => {
        return {language: event.target.value}
    })

}

  render() {
    return (
      <div>
      <select value={this.state.language} onChange={this.handleContext}>
      <option value={"en"}>EN</option>
      <option value={"it"}>IT</option>
  </select>
      <LanguageContext.Provider value={this.state.language}>
        <TodoList render={(items, handleDeleteTodo) => {
          console.log(items);
          return (
          <ul>
            {items.map((item) => {
                return (
                        <li key={item.key}>{item.description} <span>{item.done ? "Completato" : ""}</span> <button id={item.key} onClick={handleDeleteTodo}>Delete Todo</button></li>
                )
            })}
        </ul>)
        }}></TodoList>
      </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;

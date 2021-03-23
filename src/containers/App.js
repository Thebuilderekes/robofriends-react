import React  from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import "../containers/App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robot: robots,
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });

  }

  render() {
    const filteredRobots =this.state.robot.filter((robots) => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });



    return (
      <div className="tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}



export default App;

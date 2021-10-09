import React, { Component } from "react";
import CardList from "../components/CardList";
import { SearchBox } from "../components/SearchBox";
import Scroll from "../components/Scroll";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });

    console.log("check");
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    }

    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>RobotFriends</h1>
        <SearchBox
          searchChange={this.onSearchChange}
          searchField={this.searchField}
        />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

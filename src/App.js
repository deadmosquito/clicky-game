import React, { Component } from "react";
import Card from "../clicky-game/src/components/Card";
import Wrapper from "../clicky-game/src/components/Wrapper";
import Header from "../clicky-game/src/components/Header";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>Friends List</Header>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


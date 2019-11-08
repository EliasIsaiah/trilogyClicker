import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import friends from "./components/friends.json";
import { Friend } from './interfaces/Friend';
import { shuffle } from './shuffleArray';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    previousID: null,
    score: 0,
    topScore: 0,
  };

  incrementScore = () => {
    const newScore = this.state.score++;
    this.setState({...this.state, score:newScore} );
    console.log("this.state.score", this.state.score);
  }

  shuffleFriends = (id: number) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends: Friend[] = shuffle(this.state.friends);
    this.incrementScore()

    // const friends:Friend[] = this.state.friends.filter((friend:Friend) => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ ...this.state, friends });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
      <Navbar score={this.state.score} topScore={this.state.topScore} />
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriends={this.shuffleFriends}
            id={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </>
    );
  }
}

export default App;

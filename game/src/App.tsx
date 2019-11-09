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
    previousIDs: [0],
    score: 0,
    topScore: 0,
  };

  
  restart = () => {
    alert("game over");
    this.setState({
      friends,
      previousIDs: [0],
      score: 0,
      topScore: this.state.topScore,
    })
    
    console.log("this.state endgame", this.state)
  }
  
  incrementScore = () => {
    
    let newScore = this.state.score + 1;

    const newTopScore = newScore > this.state.topScore ? newScore : this.state.topScore;

    if (newScore > 8) {
      alert("congrats you won.");
      this.restart();
    }

    return {
      newScore,
      newTopScore
    }
  }

  shuffleFriends = (id: number) => {
    const friends: Friend[] = shuffle(this.state.friends);

    if(!this.state.previousIDs.includes(id)) {

      const newScores = this.incrementScore();
      
      this.setState({ friends, previousIDs: [...this.state.previousIDs, id], score:newScores.newScore, topScore:newScores.newTopScore });
    } 
    else {
      return this.restart()
    };
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
      <Navbar score={this.state.score} topScore={this.state.topScore} />
      <Wrapper>
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

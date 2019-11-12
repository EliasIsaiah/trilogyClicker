import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import pictures from "./components/pictures.json";
import { PictureInterface } from './interfaces/PictureCard';
import { shuffle } from './shuffleArray';

class App extends Component {
  // Setting this.state.pictures to the pictures json array
  state = {
    pictures,
    previousIDs: [0],
    score: 0,
    topScore: 0,
  };

  
  restart = () => {
    alert("game over");
    this.setState({
      pictures,
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

  shufflePictures = (id: number) => {
    const pictures: PictureInterface[] = shuffle(this.state.pictures);

    if(!this.state.previousIDs.includes(id)) {

      const newScores = this.incrementScore();
      
      this.setState({ pictures, previousIDs: [...this.state.previousIDs, id], score:newScores.newScore, topScore:newScores.newTopScore });
    } 
    else {
      return this.restart()
    };
  };


  render() {
    return (
      <>
      <Navbar score={this.state.score} topScore={this.state.topScore} />
      <Wrapper>
        <p className="col-12 mx-auto">Click all nine pictures without repeating yourself</p>
        {this.state.pictures.map(picture => (
          <PictureCard
            shufflePictures={this.shufflePictures}
            id={picture.id}
            name={picture.name}
            image={picture.image}
          />
        ))}
      </Wrapper>
      </>
    );
  }
}

export default App;

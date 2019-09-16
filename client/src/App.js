import React from 'react';
import './App.css';
import Nav from './components/Nav';

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(players => this.setState({ players: players }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Nav />

        {this.state.players.map(player => (
          <div className="player" key={player.name}>
            <p>
              <span className="name">Name: </span>
              {player.name}
            </p>
            <p>
              <span className="country">Country :</span>
              {player.country}
            </p>
            <p>
              <span className="searches">Searches: </span>
              {player.searches}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

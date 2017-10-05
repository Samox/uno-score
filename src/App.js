import React, { Component } from 'react';
import './App.css';
import { Button, Input } from 'semantic-ui-react'
import HistoricGraph from './graph.js'
import Fetch from 'react-fetch'


class App extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      partyNumber: 0,
      historic: [
        {name: 'Partie: 0', Wadidou: 0, Irene: 0, BBChat:0, Cheche:0, Zig:0, Clara:0, Sammy: 0},
      ],
      Wadidou: {
        score: 0,
        historic: [],
        victories: 0,
        newScore: 0,
      },
      Irene: {
        score: 0,
        historic: [],
        victories: 0,
        newScore: 0,
      },
      BBChat: {
        score: 0,
        historic: [],
        victories: 0,
        newScore: 0,
      },
      Cheche: {
        score: 0,
        historic: [],
        victories: 0,
        newScore: 0,
      },
      Zig: {
        score: 0,
        historic: [],
        victories: 0,
        newScore: 0,
      },
      Clara: {
        score: 0,
        historic: [],
        victories: 0,
        newScore: 0,
      },
      Sammy: {
        score: 0,
        historic: [],
        victories: 0,
        newScore: 0,
      },
    };
  }

  submit() {
    var newState = this.state
    newState.partyNumber += 1
    var game = {name: `Partie: ${newState.partyNumber}`}
    Object.keys(newState).forEach(function(gamer) {
      if(!['data', 'historic', 'partyNumber'].includes(gamer)) {
        newState[gamer].score += parseInt(newState[gamer].newScore)
        game[gamer] = newState[gamer].score
      }
    }, this);
    newState.historic.push(game);
    this.setState(newState);
    console.log(fetch('https://unoespagne-2dfe.restdb.io/rest/party?apikey=59d6407316d89bb778329175', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game)
    }))
  }

  updateInputValue(evt, gamer) {
    var newState = this.state
    newState[gamer].newScore = evt.target.value
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">UNO Score</h1>
        </header>
        <div className="bodytavu">
          <div className="Graph">
            <HistoricGraph historic={this.state.historic} />
          </div>
          <div className="Gamers">
            <div className="Gamer">
              <div className="Name">
                Wadidou
              </div>
              <div className="score">
                score: {this.state.Wadidou.score}
              </div>
              <Input type={'number'} className="Input" value={this.state.Wadidou.newScore} onChange={evt => this.updateInputValue(evt, 'Wadidou')}></Input>
            </div>
            <div className="Gamer">
              <div className="Name">
                Irene
              </div>
              <div className="score">
                score: {this.state.Irene.score}
              </div>
              <Input type={'number'} className="Input" value={this.state.Irene.newScore} onChange={evt => this.updateInputValue(evt, 'Irene')}></Input>
            </div>
            <div className="Gamer">
              <div className="Name">
                BBChat
              </div>
              <div className="score">
                score: {this.state.BBChat.score}
              </div>
              <Input type={'number'} className="Input" value={this.state.BBChat.newScore} onChange={evt => this.updateInputValue(evt, 'BBChat')}></Input>
            </div>
            <div className="Gamer">
              <div className="Name">
                Cheche
              </div>
              <div className="score">
                score: {this.state.Cheche.score}
              </div>
              <Input type={'number'} className="Input" value={this.state.Cheche.newScore} onChange={evt => this.updateInputValue(evt, 'Cheche')}></Input>
            </div>
            <div className="Gamer">
              <div className="Name">
                Zig
              </div>
              <div className="score">
                score: {this.state.Zig.score}
              </div>
              <Input type={'number'} className="Input" value={this.state.Zig.newScore} onChange={evt => this.updateInputValue(evt, 'Zig')}></Input>
            </div>
            <div className="Gamer">
              <div className="Name">
                Clara
              </div>
              <div className="score">
                score: {this.state.Clara.score}
              </div>
              <Input type={'number'} className="Input" value={this.state.Clara.newScore} onChange={evt => this.updateInputValue(evt, 'Clara')}></Input>
            </div>
            <div className="Gamer">
              <div className="Name">
                Sammy
              </div>
              <div className="score">
                score: {this.state.Sammy.score}
              </div>
              <Input type={'number'} className="Input" value={this.state.Sammy.newScore} onChange={evt => this.updateInputValue(evt, 'Sammy')}></Input>
            </div>
            <div>
              <Button className="SubmitButton" onClick={this.submit}>Submit</Button>
            </div>
          </div>        
        </div>
      </div>
    );
  }
}

export default App;

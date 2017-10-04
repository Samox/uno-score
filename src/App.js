import React, { Component } from 'react';
import './App.css';
import { Button, Input, Checkbox } from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      data: [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ],
      historic: [],
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
      Marceau: {
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
    var game = {name: 'Croute'}
    Object.keys(newState).forEach(function(gamer) {
      if(!['data', 'historic'].includes(gamer)) {
        newState[gamer].score += parseInt(newState[gamer].newScore)
        console.log(game)
        game[gamer] = newState[gamer].score
        console.log(game)
      }
    }, this);
    newState.historic.push(game);
    this.setState(newState);
    console.log(this.state)
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

        <div className="Gamer">
          Wadidou <br/>
          score: {this.state.Wadidou.score} <br/>
          historic: {this.state.Wadidou.historic}
          <Input value={this.state.Wadidou.newScore} onChange={evt => this.updateInputValue(evt, 'Wadidou')}></Input>
          <Checkbox/>
        </div>
        <div className="Gamer">
          Irene <br/>
          score: {this.state.Irene.score}
          historic: {this.state.Irene.historic}
          <Input value={this.state.Irene.newScore} onChange={evt => this.updateInputValue(evt, 'Irene')}></Input>
          <Checkbox/>
        </div>
        <div className="Gamer">
          BBChat <br/>
          score: {this.state.BBChat.score}
          historic: {this.state.BBChat.historic}
          <Input value={this.state.BBChat.newScore} onChange={evt => this.updateInputValue(evt, 'BBChat')}></Input>
          <Checkbox/>
        </div>
        <div className="Gamer">
          Marceau <br/>
          score: {this.state.Marceau.score}
          historic: {this.state.Marceau.historic}
          <Input value={this.state.Marceau.newScore} onChange={evt => this.updateInputValue(evt, 'Marceau')}></Input>
          <Checkbox/>
        </div>
        <div className="Gamer">
          Zig <br/>
          score: {this.state.Zig.score}
          historic: {this.state.Zig.historic}
          <Input value={this.state.Zig.newScore} onChange={evt => this.updateInputValue(evt, 'Zig')}></Input>
          <Checkbox/>
        </div>
        <div className="Gamer">
          Clara <br/>
          score: {this.state.Clara.score}
          historic: {this.state.Clara.historic}
          <Input value={this.state.Clara.newScore} onChange={evt => this.updateInputValue(evt, 'Clara')}></Input>
          <Checkbox/>
        </div>
        <div className="Gamer">
          Sammy <br/>
          score: {this.state.Sammy.score}
          historic: {this.state.Sammy.historic}
          <Input value={this.state.Sammy.newScore} onChange={evt => this.updateInputValue(evt, 'Sammy')}></Input>
          <Checkbox/>
        </div>
        <Button onClick={this.submit}>Submit</Button>
      </div>
    );
  }
}

export default App;

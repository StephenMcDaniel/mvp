//build out component here
import React, { useCallback } from 'react';
import axios from "axios";

// const say = require('say')
// say.speak('Hello this is a test', 'Samantha');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    view: 'Main',
    items: [],
    }
    this.foodClick = this.foodClick.bind(this);
    this.renderView = this.renderView.bind(this);
    this.speak = this.speak.bind(this);
  }
/********************************* COMPONENT DID MOUNT *************************************
 * speechSynthesis is still an experimental API, one issue is that it responds with an empty array before responding with an array that contains all the voice objects. For this reason it has to be called once on componentDidMount before being used anywhere else. */
componentDidMount () {
var voices = window.speechSynthesis.getVoices();
}




/**********************************FOOD CLICK*************************************************
 * Retrives list of foods from DB when clicked
 */
foodClick (phrase) {
var utterance = new SpeechSynthesisUtterance(phrase);
var voices = window.speechSynthesis.getVoices();
utterance.voice = voices.filter(function(voice) { return voice.name == 'Victoria'; })[0];
window.speechSynthesis.speak(utterance);

axios.get('/all')
  .then((items) => {this.setState({view: 'Food', items: items.data})})
  .catch((error) => {console.log(error)});
}

speak (phrase) {
  var utterance = new SpeechSynthesisUtterance(phrase);
  var voices = window.speechSynthesis.getVoices();
  utterance.voice = voices.filter(function(voice) { return voice.name == 'Victoria'; })[0];
  window.speechSynthesis.speak(utterance);
}


renderView () {
if (this.state.view === 'Main') {
  return (
    <div className="thing">
<img src="./IMG/vegetables.png" className="main" onClick={() => this.foodClick('Getting food list')} />
 </div>
  )
}

if (this.state.view === 'Food') {
  return (
<div className="all">
  <div className="thing">
  <img src="./IMG/vegetables.png" className="main" onClick={() => this.foodClick('Getting food list')} />
  </div>
  <div className="item-container">
    {this.state.items.map((item) => {
      return (
        <img src={`./IMG/${item.url}`} key={item.url} className="item" onClick={() => this.speak(item.phrase)}/>
)})}
  </div>
</div>

  )
}
}

  render () {
    return (
    <div className="categories">
    {this.renderView()}
      </div>
    )
  }


}

export default App;
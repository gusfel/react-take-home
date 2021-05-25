import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import MainBox from './campaignBox/MainBox.js'


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        campaigns: []
      }

  }

  componentDidMount() {
    axios.get('https://www.plugco.in/public/take_home_sample_feed')
      .then(response => {
        this.setState({
          campaigns: response.data.campaigns
        })
        console.log(this.state)
      })
  }

  render() {
    const campaignBoxes = this.state.campaigns.map(camp => <MainBox key={camp.id} campaign={camp}/>)
    return (
      <div className="App">
        <header>
          <img id="headerIcon" src="https://www.plugco.in/static/icons/favicon-96x96.png"></img>
        </header>
        {campaignBoxes}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>


          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;

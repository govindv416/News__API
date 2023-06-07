import React, { Component } from 'react'
import './App.css';
import Navbars from './Componets/Navbars';
import NewsShow from './Componets/NewsShow';

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
export class App extends Component {
  pageSize =9;
  constructor(){
    super();
    this.state={
    darkMode:"dark",
    lightMode:"light"
  }
}

  toggleMode = () => {
    this.setState({lightMode:this.state.darkMode})
    this.setState({darkMode:this.state.lightMode})
  }

  render() {
    return (
      <div className={`bg-${this.state.lightMode}`}>
      <Router>
      <Navbars lightMode={this.state.darkMode} darkMode ={this.state.lightMode}/>
      <div onClick={this.toggleMode} className="form-check form-switch d-flex justify-content-end">
<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
</div>

      <Switch>
          <Router exact path="/general"><NewsShow lightMode={this.state.darkMode} darkMode ={this.state.lightMode} key='general' pageSize={this.pageSize} country='in' category='general' /> </Router>
          <Router exact path="/business"><NewsShow lightMode={this.state.darkMode} darkMode ={this.state.lightMode} key="business" pageSize={this.pageSize} country='in' category='business'/> </Router>
          <Router exact path="/entertainment"><NewsShow lightMode={this.state.darkMode} darkMode ={this.state.lightMode} key='entertainment'pageSize={this.pageSize} country='in' category='entertainment'/> </Router>
          <Router exact path="/general"><NewsShow lightMode={this.state.darkMode} darkMode ={this.state.lightMode} key='general'pageSize={this.pageSize} country='in' category='general'/> </Router>
          <Router exact path="/health"><NewsShow lightMode={this.state.darkMode} darkMode ={this.state.lightMode} key='health'pageSize={this.pageSize} country='in' category='health'/> </Router>
          <Router exact path="/science"><NewsShow lightMode={this.state.darkMode} darkMode ={this.state.lightMode} key='science'pageSize={this.pageSize} country='in' category='science'/> </Router>
          <Router exact path="/sports"><NewsShow lightMode={this.state.darkMode} darkMode ={this.state.lightMode} key='sports'pageSize={this.pageSize} country='in' category='sports'/> </Router>
          <Router exact path="/technology"><NewsShow lightMode={this.state.darkMode} darkMode ={this.state.lightMode} key='technology'pageSize={this.pageSize} country='in' category='technology'/> </Router>
      </Switch>
      </Router> 

      </div>
    )
    }
}

export default App

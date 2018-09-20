import React, { Component } from 'react';
import TimerList from './TimerList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row mt">
          		<div className="col-lg-12">
          			<div className="form-panel">
                  	  <h4 className="mb"> Gestion du temps </h4>
                  <div className="timercontrol">
                  	 <form className="form-inline timer ">
                          <div className="form-group">
                            <TimerList />
                          </div>
                      </form>  
                    </div>
                  </div>
              </div>
        </div>
      </div>
    );
  }
}
export default App;

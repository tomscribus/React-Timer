import React, { Component } from 'react';
import * as moment from 'moment';
import './App.css';
import Utility from './Utility';
import Axios from 'axios';
import Timer from './Timer';


class TimerList extends Component {

    state = {timers: [] , currTime:{}}

    componentDidMount(){

        Axios.get('http://yourapi/timer')
        .then (res=> {
                this.setState({timers : res.data , currTime : moment().locale('fr') })
            });

            setInterval( () => {
                this.setState({
                  currTime : moment().locale('fr')
                })
              },1000)
    }

    tick(start , end , current){

      if (end==="0000-00-00 00:00:00")
        { return Utility.toTick(start , current) ; }
      else 
        { return Utility.toTick(start , end) }

    }

    price(start , end , current){

      if (end==="0000-00-00 00:00:00")
        { return Utility.toPrice(start , current) ; }
      else 
        { return Utility.toPrice(start , end) }
    }

  render() {

    let runningprice = this.state.timers
      .filter(i => i.end==="0000-00-00 00:00:00")
        .reduce((sum, i) => (
          sum += Utility.toPrice(i.start , this.state.currTime)
      ), 0);


    let endprice = this.state.timers
      .filter(i => i.end!=="0000-00-00 00:00:00")
        .reduce((sum, i) => (
          sum += Utility.toPrice(i.start , i.end)
      ), 0);

    let numclient = this.state.timers
        .reduce((sum, i) => (
          sum += 1
      ), 0);


    return (
      <div>
        <div className="resultat">
          <p> Nombre de clients : <span className="badge last-stoped ">{numclient}</span> </p>
          <p> Resultat en cours : <span className="badge has-started">{runningprice}</span> €</p>
          <p> Resultat facturé : <span className="badge has-stoped ">{endprice}</span> €</p>
          <p> Resultat total : <span className="badge">{runningprice+endprice}</span> €</p>
        </div>
           {this.state.timers.map((timer,index) => 
            <Timer key={index} price = {this.price(timer.start , timer.end , this.state.currTime)}  tick={this.tick(timer.start , timer.end , this.state.currTime)} end={timer.end} />
          )}
      </div>
    );
  }
}

export default TimerList;
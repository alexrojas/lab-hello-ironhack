import React, { Component } from "react";
import './App.css'

class App extends Component{
  render(){
    return (
      <div className="App">

        <nav class="navbar nav1">
          <a class="navbar-brand" href="#"><img src="/images/ironhack-logo.svg" alt="Ironhack" class="ironhack-logo"/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/images/menu-top.svg" alt="Ironhack" class="icon-menu"/>
          </button>
        </nav>


        <div class="jumbotron background1">
          <div class="insideJumbo">
            <img className="reactLogo" src="/images/react-logo.svg" />
            <h1 className="display-4 bigTitle">Say Hello to ReactJS</h1>
            <p class="lead">You will learn Frontend framework from scratch, to become an Ninja Developer
            </p>
            <p class="lead">
              <a class="btn btn-primary btn-lg theButton" href="#" role="button">Awesome</a>
            </p>
          </div>
        </div>

        <div class="card-deck">
          <div class="card card2">
            <img class="card-img-top card1" src="./images/icon1.png" alt="Card image cap"/>
            <div class="card-body card5">
              <h5 class="card-title card4">Declarative</h5>
              <p class="card-text card3">React makes it painless to create intereactive UIS</p>

            </div>
          </div>
          <div class="card card2">
            <img class="card-img-top card1" src="./images/icon2.png" alt="Card image cap"/>
            <div class="card-body card5">
              <h5 class="card-title card4">Components</h5>
              <p class="card-text card3">Build encapsulated components that manage their state</p>
            </div>
          </div>
          <div class="card card2">
            <img class="card-img-top card1" src="./images/icon3.png" alt="Card image cap"/>
            <div class="card-body card5">
              <h5 class="card-title card4">Single-Way</h5>
              <p class="card-text card3">A set of immutable values are passed to the components</p>

            </div>
          </div>
          <div class="card card2">
            <img class="card-img-top card1" src="./images/icon4.png" alt="Card image cap"/>
            <div class="card-body card5">
              <h5 class="card-title  card4">JSX</h5>
              <p class="card-text card3">Statically-typed designed to run on modern browsers</p>

            </div>
          </div>



        </div>



      </div>
    )

  }
}

export default App

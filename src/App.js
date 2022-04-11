import logo from './logo.svg';
import './App.css';
import mongoose from 'mongoose';
import passport from 'passport';

function App() {

  const express = require('express')
  const dotenv = require('dotenv')

  dotenv.config({ path: './config/config.env'})

  const app = express()

  const PORT = process.env.PORT || 3000

  
  const dbConnect = require('./config/db')

  dbConnect()
  //test

  app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )

  /*const dB = 'mongodb://localhost:27017/auth'
  require("dotenv").config();

  const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");
  const cookieParser = require("cookie-parser");

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.engine("html", require("ejs").renderFile);
  app.use(express.static(__dirname + "/public"));

  app.use(cookieParser());

  mongoose.connect(
    dB,
    {
      useUnifedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    },
    (error) => {
      if(error) console.log(error)
    }
  )
*/
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;

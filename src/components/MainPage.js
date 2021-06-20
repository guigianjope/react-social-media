import "./MainPage.css"
import React, { Component } from "react";
import { Consumer } from "../Context"; // Import Provider from Context.js
import {Link} from 'react-router-dom'

export default class MainPage extends Component {
    render() {
      return (
        <Consumer>
          {(value) => (
            <div className="main-page">
              {value.images.map((image, index) => (
                <div className="card" key={index}>            
                  <Link to={`/Details/${image.id}`}><img src={image.url} alt="something"/></Link>
                  <p>{image.title}</p>
                </div>
              ))}
            </div>
          )}
        </Consumer>
      );
    }
  }
import "./MainPage.css"
import React from "react";
import { Consumer } from "../Context"; // Import Provider from Context.js

export default class MainPage extends React.Component {
    render() {
      return (
        <Consumer>
          {(value) => (
            <div className="main-page">
              {value.images.map((image, index) => (
                <div className="card" key={index}>            
                  <a href="/Details"><img src={image.url} alt="something"/></a>
                  <p>{image.title}</p>
                </div>
              ))}
            </div>
          )}
        </Consumer>
      );
    }
  }
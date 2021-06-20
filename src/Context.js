import React, { Component } from "react";

const Context = React.createContext(); // Initializing Context Instance

export class Provider extends Component {
  state = {
    // This is the state that we wanna share between Components
    images: []
  };

  componentDidMount() {
    //We will fetch the data after the DOM mount the component.
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      response.json()
        .then((data) => {
          this.setState({
            images: data
          });
        })
        .catch((erro) => {
          console.log(`this is a error ${erro}`);
        });
    });
    /* .then(res => {
      if(res.status !== 200) {
        console.log("ERRO");
      }
      return res.json();
    })
    .then(res => {
      let imageData = {
        id: res.id,
        title: res.title,
        url: res.url
      }
      this.setState({images: imageData})
    })
  } */
  }

  render() {
    return (
      //Return the Provider with the data that we wanna share between components. Everything that we have inside Value, will be visible for all components.
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer; // Export the Consumer. We need to import the Consumer where we want to use the data.
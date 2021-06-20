import React, { Component } from "react";
import "./ImageDetail.css";

export class ImageDetail extends Component {
    state = {
        main: []
    }

   componentDidMount() {
        let pathArray = window.location.pathname.split('/');
        let photoId = pathArray[2];
        /* console.log(photoId) */
        fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
            .then((response) => {
            response.json()
                .then(response => {
                let photoData = {
                    id: response.id,
                    title: response.title,
                    url: response.url
                }
                this.setState({main: photoData})
                })
                .catch((erro) => {
                console.log(`this is a error ${erro}`);
                });
            });
    };

    render() {     
        /* const imageid = this.state.main.id; */
        const imagetitle = this.state.main.title;
        const imageurl = this.state.main.url;
          
        /* console.log(imageid) */
        return (
                        <div className="image-detail" key="">
                            <div className="image-card">
                                <div className="left-card">
                                    <img src={imageurl} alt="detail" />
                                </div>
                                <div className="right-card">
                                    <h3>{imagetitle}</h3>
                                </div>                                     
                            </div>                        
                        </div>
        );
    }
}

export default ImageDetail;
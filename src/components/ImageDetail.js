import React, { Component } from "react";
import "./ImageDetail.css";
import { AiTwotoneLike } from "react-icons/ai";

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
                                    <div className="image-title">
                                        <h3>{imagetitle}</h3>
                                    </div>
                                    <div className="image-info">
                                        <button className="like-btn"> 
                                            <span id="icon"><AiTwotoneLike size="1.3em" color="black"/></span>
                                            <span id="count">0</span> Like
                                        </button>
                                    </div>
                                    <hr/>
                                    <div className="image-comments">
                                        <form className="image-comment-form">
                                            <input className="comment-area" type="text" placeholder="Add a comment..." />
                                            <input className="btn" type="submit" value="Publish" />
                                        </form>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ligula nibh. Vivamus faucibus bibendum ante eu elementum. Morbi ac arcu scelerisque, volutpat ipsum non, molestie velit. Curabitur at suscipit libero. In pretium lobortis mi at eleifend. Cras molestie tellus urna, a ullamcorper ligula ultricies non. Nam consequat mi sed est aliquam dictum. Vestibulum eu erat quis ligula placerat maximus. Aliquam a pretium turpis, vel aliquet nisl.
                                    </div>
                                    
                                </div>                                     
                            </div>                        
                        </div>
        );
    }
}

export default ImageDetail;
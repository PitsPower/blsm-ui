import React, { Component } from 'react';

export default class Skin extends Component {
    render() {
        return (
            <div className="skin">
                <div className="container">
                    <img src={'https://bonkleaguebot.herokuapp.com/avatar.svg?skinCode='+encodeURIComponent(this.props.avatar)} />
                    <h1>{this.props.name}</h1>
                </div>
                <div className="buttons">
                    <button>UPLOAD</button>
                    <button>EDIT</button>
                    <button>SHARE</button>
                </div>
            </div>
        );
    }
}

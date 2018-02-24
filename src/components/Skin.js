import React, { Component } from 'react';

export default class Skin extends Component {
    render() {
        return (
            <div className="skin">
                <div className="container">
                    <div>
                        <img src={'https://bonkleaguebot.herokuapp.com/avatar.svg?skinCode='+encodeURIComponent(this.props.avatar)} />
                        <h1>{this.props.name}</h1>
                    </div>
                    <div>
                        <button>UPLOAD TO BONK.IO</button>
                        <button>A BUTTON THAT DOES A COOL THING</button>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';

import Skin from './Skin';

export default class MySkins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            using: ''
        };

        this.resetUsedSkin = this.resetUsedSkin.bind(this);
        this.setUsedSkin = this.setUsedSkin.bind(this);
    }

    resetUsedSkin() {
        this.setState({
            using: ''
        });
    }
    setUsedSkin(skinCode) {
        this.setState({
            using: skinCode
        });
    }

    render() {
        var skins = require('../data/skins.json').map((skin, i) => (
            <Skin {...skin} using={skin.avatar === this.state.using} key={i} resetUsedSkin={this.resetUsedSkin} setUsedSkin={this.setUsedSkin} />
        ));

        return (
            <div className="skins">{skins}</div>
        );
    }
}

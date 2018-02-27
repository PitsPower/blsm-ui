import React, { Component } from 'react';

var tickSvg =
<svg className="icon tick" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <circle r="50" cx="50" cy="50" fill="#111" />
    <g transform="translate(-8.13172798366)">
        <rect id="check1" x="35.8578643763" y="50" width="10" height="0" transform="rotate(-45, 35.8578643763, 50) translate(-5, -2)" fill="#71d458" />
        <rect id="check2" x="64.1421356237" y="50" width="10" height="0" transform="rotate(225, 64.1421356237, 50) translate(-5, -25)" fill="#71d458" />
    </g>
</svg>;


export default class Skin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadConfirm: false,
            uploading: false,
            using: this.props.using
        };

        this.upload = this.upload.bind(this);
        this.cancelUpload = this.cancelUpload.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            using: nextProps.using
        });
    }

    upload() {
        if (this.state.uploadConfirm) {
            this.setState({uploading: true});
            this.props.resetUsedSkin();

            setTimeout(() => {
                this.setState({uploading: false});
                this.props.setUsedSkin(this.props.avatar);
            }, 2000);
        }

        this.setState({
            uploadConfirm: !this.state.uploadConfirm
        });
    }
    cancelUpload() {
        this.setState({
            uploadConfirm: false
        });
    }

    render() {
        var upload = this.state.uploadConfirm ? 'SURE?' : 'UPLOAD';

        var icon = null;
        if (this.state.uploading) {
            icon = <img className="icon spin" src="img/loading.svg" />;
        } else if (this.state.using) {
            icon = tickSvg;
        }

        return (
            <div className="skin" onMouseOut={this.cancelUpload}>
                <div className="container">
                    <div className="image">
                        <img className="avatar" src={'https://bonkleaguebot.herokuapp.com/avatar.svg?skinCode='+encodeURIComponent(this.props.avatar)} />
                        {icon}
                    </div>
                    <h1>{this.props.name}</h1>
                </div>
                <div className="buttons">
                    <button onClick={this.upload} disabled={this.state.uploading || this.state.using}>{upload}</button>
                    <button>EDIT</button>
                    <button>SHARE</button>
                </div>
            </div>
        );
    }
}

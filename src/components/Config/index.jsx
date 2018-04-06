import React, {Component} from 'react';
import defaultAvatars from './avatars'
import AvatarSelector from '../AvatarSelector'
import RoleSelector from '../RoleSelector'

class Config extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avatar:'',
            role: ''
        };
    }

    defaultAvatars = defaultAvatars;
    roles = ['Warrior','Defender']

    render() {
        return(
            <div className="login-form">
                <div className="login-form__header">Config</div>
                <div className="login-form__body">
                    <RoleSelector roles={this.roles} check={(role)=>{this.roleChoosed(role)}}/>
                    <AvatarSelector avatarChoosed={(ava)=>{this.avatarChoosed(ava)}} defaultAvatars={this.defaultAvatars} selected={this.state.avatar} />
                </div>
            </div>
        );
    }

    avatarChoosed (avatar) {
        this.setState({
            avatar
        });
    }
    
    roleChoosed (role) {
        this.setState({
            role
        });
    }
}

export default Config;
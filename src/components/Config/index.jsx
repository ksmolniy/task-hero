import React, {Component} from 'react';
import defaultAvatars from './avatars'
import AvatarSelector from '../AvatarSelector'
import RoleSelector from '../RoleSelector'

class Config extends Component {
    constructor(props) {
        super(props);
    }

    defaultAvatars = defaultAvatars;

    render() {
        return(
            <div className="login-form">
                <div className="login-form__header">Choose your role</div>
                <div className="login-form__body">
                    <RoleSelector />
                    <AvatarSelector avatarChoosed={this.avatarChoosed} defaultAvatars={this.defaultAvatars} />
                </div>
            </div>
        );
    }

    avatarChoosed () {

    }
}

export default Config;
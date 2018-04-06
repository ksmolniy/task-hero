import React, {Component} from 'react';
import Avatar from '../Avatar'
import LinkAvatarSelector from '../LinkAvatarSelector'
import './style.css';

class AvatarSelector extends Component{
    constructor(props){
        super(props);

        let {defaultAvatars, selected, avatarChoosed} = props;


        this.state = {
            defaultAvatars,
            selectedAvatar: selected,
            isCustomAvatar: !defaultAvatars.some(item=>item=== selected)
        };


        this.avatarChoosedCallback = avatarChoosed;
    }
    
    selectAvatar(avatar) {
        this.setState({
            selectedAvatar: avatar
        })
        this.avatarChoosedCallback(avatar);
    }

    selectDefaultAvatar(avatar) {
        this.selectAvatar(avatar);
        this.setState({
            isCustomAvatar: false
        });
    }
    
    selectCustomAvatar(avatar) {
        this.selectAvatar(avatar);
        this.setState({
            isCustomAvatar: true
        });
    }

    render(){
        return (
            <div>
                <div className="avatar-selector__header">
                    Choose avatar
                </div>
                <div className="avatar-selector__list">
                    {
                        this.state.defaultAvatars.map(
                            (avatar, i) => <Avatar src={avatar}
                                                       key={avatar} 
                                                       click={()=>{this.selectDefaultAvatar(avatar)}} 
                                                       selected={avatar === this.state.selectedAvatar}
                                                />
                            )
                    }
                </div>
                <div className="avatar-selector__link">
                    <LinkAvatarSelector select={(ava)=>{this.selectCustomAvatar(ava)}} isCustom={this.state.isCustomAvatar} selected={this.state.selectedAvatar}/>
                </div>
            </div>
        );
    }

}


export default AvatarSelector;
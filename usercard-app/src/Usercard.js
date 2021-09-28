import React from 'react';
import {CardText, CardBody, CardTitle} from 'reactstrap';

class UserCard extends React.Component {
    render() {
        return (
            <div className='userCard'>
            <CardTitle>Warren Longmire on Github</CardTitle>
            
            <div className='userImg'>
                <img src={this.props.userCard.avatar_url} alt={this.props.userCard.login} />
            </div>
            <CardBody>
                <CardText className='userInfo'>
                    
                    Login: {this.props.userCard.login}<br/>
                    Location: {this.props.userCard.location}<br/>
                    Email: {this.props.userCard.email}<br/>
                    Followers: {this.props.userCard.followers}<br/>
                    
                </CardText>
                </CardBody>
            </div>
        )
    }
}

export default UserCard;
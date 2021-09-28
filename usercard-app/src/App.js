import React from 'react';
import axios from 'axios';
import UserCard from './Usercard';
import Follower from './Follower';
import { Card } from 'reactstrap';
import './App.css';


class App extends React.Component {
  state = {
    userCard: '',
    followersCard: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/wlongmireLambda')
      .then(resp => {
        this.setState({
          ...this.state,
          userCard: resp.data
        })
        axios.get(resp.data['followers_url'])
          .then(res => {
            this.setState({
              ...this.state,
              followersCard: res.data
            })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render(){
    return (
     <div className="App">
      <h1>GitHub Spotlight</h1>
        <Card className='card'>
          <UserCard userCard={this.state.userCard}/>
        </Card>
        <div className='followers'>
          <h3>Followers:</h3>
          <Card>{this.state.followersCard.map(item => {
            return <Follower key={item.id} follower={item} />
          })}
          </Card>
        </div>
     </div>
    );
  }
}

export default App;

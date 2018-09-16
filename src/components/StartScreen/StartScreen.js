import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StartScreen.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../assets/img/logo.png';
class StartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      enabled:false
    }
    localStorage.removeItem('username');

  }

  addName(event){
    this.setState({
      username:event.target.value
    })

    if(event.target.value){
      this.setState({
        enabled:true
      })
    }
    else{
      this.setState({
        enabled:false
      })
    }
  }
  componentDidMount() {

  }
  render() {

    return (
      <div className="StartScreen">
        <div className="master">
          <div className="login_box">
            <div className="logo">
              <img src={logo} style={{width:"100%"}}/>
            </div>
            <div className="name">
              <form className="loginForm"> 
              <TextField
                id="name"
                label="Your Name"
                margin="normal"
                value={this.state.username}
                className="user_name"
                onChange={(e)=>this.addName(e)}
                autoComplete="off"
                autoFocus={true}
              />
              &nbsp;&nbsp;&nbsp;
              <Link to={"/game/"+this.state.username} id="loginBtn"><Button  variant="contained" color="primary" className="" disabled={!this.state.enabled}>
                Login
              </Button></Link>

              </form>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}



export default StartScreen;

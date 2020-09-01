import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import './Login.css';
class Login extends Component {
constructor(){
super();
this.state = {
username: '',
password: '',
status:false,
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}
login() {
    this.state.status=true;
    if(this.state.username && this.state.password){
    fetch('https://floating-sierra-52069.herokuapp.com/todo/users/login',
    {
    method: 'POST',
    headers:
    {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body:JSON.stringify(this.state)
    })
    .then((response) => response.json()
    .then((res) => {
   
    let responseJson = res;
    console.log(res)
    console.log(responseJson.userData)
    if(responseJson.userData){
    //alert(responseJson.userData)
    sessionStorage.setItem('userData',JSON.stringify(responseJson));
    this.setState({redirectToReferrer: true});
    }
    else
    alert(res.error);
    }))
    .catch((error) => {
        alert(error);
        });
    }
    else{
     alert("Username and Password are required")   
    }
    }
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
if (this.state.redirectToReferrer) {
if(this.state.username === 'admin')
{
return (<Redirect to={'/admin'}/>)
}
else
return (<Redirect to={'/home'}/>)
}
if(sessionStorage.getItem('userData')){
    return (<Redirect to={'/home'}/>)
}
return (

<div className="row" id="Body">
<div className="medium-5 columns left">
<h4>Login</h4>
<input type="text" name="username" placeholder="Username" onChange={this.onChange} />
<input type="password" name="password" placeholder="Password" onChange={this.onChange} />
<input type="submit" className="button" value="Login" onClick={this.login}/>
<a href="/signup">Registration</a>
</div>
</div>

);
}
}
export default Login;

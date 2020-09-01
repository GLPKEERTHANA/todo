import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
class Signup extends Component {
constructor(props){
super(props);
this.state = {
username: '',
password: '',
email: '',
name: '',
redirectToReferrer: false
};
this.signup = this.signup.bind(this);
this.onChange = this.onChange.bind(this);
}
signup() {

if(this.state.username && this.state.password && this.state.email && this.state.name){
fetch('https://floating-sierra-52069.herokuapp.com/todo/users/signup',
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
console.log(res)
let responseJson = res;
if(responseJson.userData){
sessionStorage.setItem('userData',JSON.stringify(responseJson));
this.setState({redirectToReferrer: true});
}
else
alert(res.error);

}))
}
}
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
return (<Redirect to={'/home'}/>)
}
return (
<div className="row " id="sBody">
<div className="medium-5 columns left">
<h4>Signup</h4>
<form>
<input type="text" name="email" placeholder="Email" onChange={this.onChange} required/>
<input type="text" name="name" placeholder="Name" onChange={this.onChange} required/>
<input type="text" name="username" placeholder="Username" onChange={this.onChange} required/>
<input type="password" name="password" placeholder="Password" onChange={this.onChange} required/>
<input type="submit" className="button" value="Sign Up" onClick={this.signup} required/>
<a href="/login">Login</a>
</form>
</div>
</div>
);
}
}
export default Signup;

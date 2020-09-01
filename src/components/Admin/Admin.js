import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Admin.css';
import UserFeed from "../UserFeed/UserFeed";
class Admin extends Component {
constructor(props) {
super(props);
this.state = {
data:[],
data1:[],
userFeed: '',
usernames:[],
redirectToReferrer: false,
name:'',
};
this.logout = this.logout.bind(this);
this.getUsernames=this.getUsernames.bind(this);
this.onChange = this.onChange.bind(this);
this.getUserFeed = this.getUserFeed.bind(this);
this.getUserFeedDone = this.getUserFeedDone.bind(this);
}

componentWillMount() {
if(sessionStorage.getItem("userData")){
this.getUsernames();
}

else{
this.setState({redirectToReferrer: true});
}

}
getUsernames() {
let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { user_id: data.userData.user_id};
if (data) {
fetch('https://floating-sierra-52069.herokuapp.com/todo/users',
{
method: 'GET'
})
.then((response) => response.json()
.then((result) => {
console.log(result)
let responseJson = result;
if(responseJson){
this.setState({usernames: responseJson});
//console.log(this.state.usernames);
}
}))
}
}
onChange(e){
this.getUserFeed(e.target.value);
this.getUserFeedDone(e.target.value);
}
getUserFeed(param) {
var p=Number(param)
let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { user_id: p};

if (data) {
fetch('https://floating-sierra-52069.herokuapp.com/todo/task/statusFalse/'+postData.user_id,
{
method: 'GET'
})
.then((response) => response.json()
.then((result) => {
console.log(result)
let responseJson = result;
if(responseJson){
this.setState({data: responseJson});
}
}))
}
}
getUserFeedDone(param) {
var p=Number(param)
let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { user_id: p};
if (data) {
fetch('https://floating-sierra-52069.herokuapp.com/todo/task/statusTrue/'+postData.user_id,
{
method: 'GET'
})
.then((response) => response.json()
.then((result) => {
console.log(result)
let responseJson = result;
if(responseJson){
this.setState({data1: responseJson});

}
}))
}
}
logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}
render() {
   const listItems = this.state.data.map((d) => <li key={d.feed}>{d.feed}</li>);
   const listItems1 = this.state.data1.map((d) => <li key={d.feed}>{d.feed}</li>);

if (this.state.redirectToReferrer) {
return (<Redirect to={'/login'}/>)
}

return (
<div className="row" id="Body">
<div className="medium-12 columns">
<a href="#" onClick={this.logout} className="logout">Logout</a>
</div>

<br/>
<div align="center">
 <select onChange={this.onChange} >
 <option> Select a username </option>

       {this.state.usernames.map((a) => <option key={a.user_id} value={a.user_id}  >{a.username}</option>)}
      </select>
      </div>
<h4>
<p className="textcenter">  In Complete Tasks </p> </h4>

<div className="centered">
<div className="medium-12 columns">

<div className="people-you-might-know">

<div className="row add-people-section">
<div className="small-12 medium-10 columns about-people">
<div className="about-people-author"> 
    {listItems }
</div>
</div>
</div>
</div>
</div>
</div>
<h4>
<p className="textcenter">  Completed Tasks </p> </h4> 
<div className="centered">
<div className="medium-12 columns">

<div className="people-you-might-know">

<div className="row add-people-section">
<div className="small-12 medium-10 columns about-people">
<div className="about-people-author"> 
    {listItems1 }
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}
}


export default Admin;

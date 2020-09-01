import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import UserFeed from "../UserFeed/UserFeed";
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
class Home extends Component {

constructor(props) {
super(props);

this.state = {
data:[],
data1:[],
userFeed: '',
redirectToReferrer: false,
name:'',
};
this.statusFeed = this.statusFeed.bind(this);
this.statusFeedAction = this.statusFeedAction.bind(this);
this.getUserFeed = this.getUserFeed.bind(this);
this.getUserFeedDone = this.getUserFeedDone.bind(this);
this.feedUpdate = this.feedUpdate.bind(this);
this.onChange = this.onChange.bind(this);
this.deleteFeed = this.deleteFeed.bind(this);
this.deleteFeedAction = this.deleteFeedAction.bind(this);
this.logout = this.logout.bind(this);
}
componentWillMount() {
if(sessionStorage.getItem("userData")){
this.getUserFeed();
this.getUserFeedDone();
}
else{
this.setState({redirectToReferrer: true});
}
}

feedUpdate(e) {
e.preventDefault();
let data = JSON.parse(sessionStorage.getItem("userData"));
let postData = { user_id: data.userData.user_id, feed: this.state.userFeed };
if (this.state.userFeed) {

fetch('https://floating-sierra-52069.herokuapp.com/todo/task',
{
method: 'POST',
headers:
{
'Accept': 'application/json',
'Content-Type': 'application/json',
},
body:JSON.stringify(postData)
})
.then((response) => response.json()
.then((res) => {
console.log(res)
let responseJson = res;
this.setState({data: this.state.data});
}))

}
window.location.reload(false);
}

statusFeed(e,param){

confirmAlert({
title: 'Status Feed',
message: 'Are you sure to update status of this feed.',
buttons: [
{
label: 'Yes',
onClick: () => this.statusFeedAction(e,param)
},
{
label: 'No',
onClick: () => alert('Click No')
}
]
});

}

statusFeedAction(e,param){

let data = JSON.parse(sessionStorage.getItem("userData"));
let postData = { user_id: data.userData.user_id,feed_id: param };
var length = this.state.data.length;
var ans=0;
for (var i = 0; i < length; i++)
{  
  if(this.state.data[i].feed_id===param)
  {  ans=i;
  break;
}
}
if (postData) {
fetch('https://floating-sierra-52069.herokuapp.com/todo/task/'+postData.feed_id,
{
method: 'PUT',
headers:
{
'Accept': 'application/json',
'Content-Type': 'application/json',
},
})
.then((response) => response.json()
.then((res) => {
console.log(res)
this.setState({data:this.state.data});
}))
}
window.location.reload(false);
}

deleteFeed(e,param){

confirmAlert({
title: 'Delete Task',
message: 'Are you sure to delete this task.',
buttons: [
{
label: 'Yes',
onClick: () => this.deleteFeedAction(e,param)
},
{
label: 'No',
onClick: () => alert('Click No')
}
]
});
}
deleteFeedAction(e,param){

  let data = JSON.parse(sessionStorage.getItem("userData"));
  let postData = { user_id: data.userData.user_id,feed_id: param };
  var length = this.state.data.length;
  var ans=0;
  for (var i = 0; i < length; i++)
  {  console.log(this.state.data[i].feed_id);
    if(this.state.data[i].feed_id===param)
    {  ans=i;
    break;
  }
  }
  if (postData) {
  fetch('https://floating-sierra-52069.herokuapp.com/todo/task/'+postData.feed_id,
  {
  method: 'DELETE',
  headers:
  {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body:JSON.stringify(postData)
  })
  .then((response) => response.json()
  .then((result) => {
  console.log(result)
  this.state.data.splice(ans,1);
  this.setState({data:this.state.data});
  if(result.status===200){
  
  alert("Task Deleted");
  }
  else
  alert("Task deletion error");
  }))
  
  }
  window.location.reload(false);
  }
  
  


getUserFeed() {

let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { user_id: data.userData.user_id};
let flag=false;
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
getUserFeedDone() {

let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { user_id: data.userData.user_id};
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

onChange(e){
this.setState({userFeed:e.target.value});
}
logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}

render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/login'}/>)
}
var completeTasks;
var IncompleteTasks;

const numRowsdata = this.state.data.length
const numRowsdata1 = this.state.data1.length

if (numRowsdata===0) {
  
  completeTasks = <h4>  <p className="textcenter"> </p> </h4> 
} else {
 
  completeTasks = <h4> <p className="textcenter">  In Complete Tasks </p> </h4>
}
if (numRowsdata1===0) {
  
  IncompleteTasks = <h4>  <p className="textcenter"> </p> </h4> 
} else {
 
  IncompleteTasks = <h4> <p className="textcenter"> Completed Tasks </p> </h4>
}
return (


<div className="row" id="Body">
<div className="medium-12 columns">


      
<a href="#" onClick={this.logout} className="logout">Logout</a>
</div>
 
<form onSubmit={this.feedUpdate} method="post">
<input className="text1" name="userFeed" onChange={this.onChange} value={this.state.userFeed} type="text" placeholder="Write your task here..."  /> 
<br/>
<input type="submit" value="Post" className="button login-c" onClick={this.feedUpdate}/>
</form>
<br/>
{completeTasks}
<UserFeed feedData = {this.state.data} deleteFeed = {this.deleteFeed}  statusFeedAction={this.statusFeedAction}  name={this.state.name}/>
{IncompleteTasks}
<UserFeed feedData = {this.state.data1} deleteFeed = {this.deleteFeed}  statusFeedAction={this.statusFeedAction}  name={this.state.name}/>

</div>
);
}
}

export default Home;

import React, {Component} from 'react';
import Linkify from 'react-linkify';
import './UserFeed.css';
//import TimeAgo from 'react-timeago';
class UserFeed extends Component {

constructor(props){
super(props);
}

render() {

let userFeed = this.props.feedData
.map(function (feedData, index) {
let chk= true;
 const price = feedData.feed_status;
if (price==='F') 
{
chk=false;
} 
else {
chk=true;
}
var loginButton;
if (chk) {
  loginButton =  <label><strike><Linkify><h5>{feedData.feed}</h5></Linkify> </strike></label>
} else {
  loginButton =  <label><Linkify><h5>{feedData.feed}</h5></Linkify> </label>
}

return (
  <div className="centered">
<div className="medium-12 columns" key={index}>

<div className="people-you-might-know">

<div className="row add-people-section">
<div className="small-12 medium-10 columns about-people">
<div className="about-people-author">


<div className="checkboxes">
 
<input type="checkbox"   onChange={(e)=>this.props.statusFeedAction(e,feedData.feed_id)} data={feedData.feed_id} value={index}  checked={chk} />
 {loginButton}
 
</div>

<br/>
</div>
</div>
<div className="small-12 medium-2 columns add-friend">
<div className="add-friend-action">
<button id="del" className="button small btn-color" onClick={(e)=>this.props.deleteFeed(e,feedData.feed_id)} data={feedData.feed_id} value={index} >
<i className="fa fa-user-times" aria-hidden="true"></i>
Delete
</button>
</div>
</div>
</div>
</div>
</div>
</div>
)
}, this);

return (
<div>
{userFeed}

</div>
);
}

}

export default UserFeed;

import React, {Component} from 'react';
import './Welcome.css';
class Welcome extends Component {
render() {
return (
<div className="row " id="Body">
<div className="medium-12 columns">

<h2 id="welcomeText"><p>TO DO LIST WEB APPLICATION</p></h2>

<div className="login">
<a href="/login" className="button signup-class">Login</a>
</div>

<a href="/signup" className="button success login-class">Signup</a>
</div>
</div>
);
}
}
export default Welcome;

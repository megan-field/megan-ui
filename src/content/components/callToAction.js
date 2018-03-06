import React from 'react';

class CallToAction extends React.Component {
  render() {
    return (
      <div id="inputForm">
        <div className="container" id="inputEmail">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small><br />
          <label htmlFor="exampleFormControlTextarea1">Comments</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
          <br />
          <br />
          <button type="button" className="btn btn-outline-secondary">Send</button>
        </div>
      </div>
    );
  }
}

export default CallToAction;

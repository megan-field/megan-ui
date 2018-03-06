import React from 'react';

class Questions extends React.Component {
  handleEmail(e) {
    console.log('emailButton');
  }

  render() {
    return (
      <div className="questions2">
        <h4 style={{ fontWeight: '600' }}>Still have questions?</h4>
        <br />
        <div className="row justify-content-center">
          <div className="col-4">
            <h5 style={{ fontWeight: '600' }}>Find out about:</h5>
            <div className="card" style={{ width: '18rem', marginLeft: '10vw' }}>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="GDPR">GDPR Compliant</a></li>
                <li className="list-group-item"><a href="dq">Data Quality</a></li>
                <li className="list-group-item"><a href="surveying">Surveying</a></li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div id="inputForm2">
              <div className="container" id="inputEmail">
                <label htmlFor="exampleInputEmail1" style={{ fontWeight: '600' }}>Email us</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" /><br />
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                <br />
                <button type="button" className="btn btn-outline-light" onClick={e => this.handleEmail(e)}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Questions;

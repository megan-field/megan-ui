import React from 'react';

class BouncePoint extends React.Component {
  render() {
    return (
      <div className="bounceOuter">
        <div className="container" id="bouncePoint">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active text-center">
                <img alt="logo" src={require('../../content/theme/custom/images/TEF2.png')} style={{ width: '8vw' }} /><br />
                <h5>Teaching Excellence Framework</h5>
                <p>AlumniBase is compatible with the DLHE survey, </p>
                <p>meaning TEF quality data for lifetime graduate outcomes.</p>
              </div>
              <div className="carousel-item text-center">
                <img alt="logo" src={require('../../content/theme/custom/images/recruitment2.png')} style={{ width: '8vw' }} /><br />
                <h5>Student Recruitment</h5>
                <p>Being able to show how students just like the applicant</p>
                <p> have gone on to succeed after graduation answers much deeper </p>
                <p>questions while they chose their university</p>
              </div>
              <div className="carousel-item text-center">
                <img alt="logo" src={require('../../content/theme/custom/images/employability.png')} style={{ width: '8vw' }} /><br />
                <h5>Employability</h5>
                <p>Past alumni success can help persuade the </p>
                <p>audiences to attend your university.</p>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BouncePoint;

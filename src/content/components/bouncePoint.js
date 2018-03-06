import React from 'react';

class BouncePoint extends React.Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" interval="false" ride="false" wrap="true">

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img className="d-block w-100" src={require('../../content/theme/custom/images/studentRecruitment.jpeg')} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Teaching Excellence Framework</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={require('../../content/theme/custom/images/studentRecruitment.jpeg')} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Student Recruitment</h5>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={require('../../content/theme/custom/images/employability.jpeg')} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Employability</h5>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default BouncePoint;

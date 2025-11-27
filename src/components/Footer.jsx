import React from 'react'

function Footer() {
  return (
    <>
  <>
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark footer py-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-uppercase text-light mb-4">Our Office</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary me-3" />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt text-primary me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary me-3" />
            info@example.com
          </p>
          <div className="d-flex pt-3">
            <a className="btn btn-square btn-light me-2" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-square btn-light me-2" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-square btn-light me-2" href="">
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-square btn-light me-2" href="">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-uppercase text-light mb-4">Quick Links</h5>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-uppercase text-light mb-4">Business Hours</h5>
          <p className="text-uppercase mb-0">Monday - Friday</p>
          <p>09:00 am - 07:00 pm</p>
          <p className="text-uppercase mb-0">Saturday</p>
          <p>09:00 am - 12:00 pm</p>
          <p className="text-uppercase mb-0">Sunday</p>
          <p>Closed</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-uppercase text-light mb-4">Gallery</h5>
          <div className="row g-1">
            <div className="col-4">
              <img className="img-fluid" src="img/service-1.jpg" alt="" />
            </div>
            <div className="col-4">
              <img className="img-fluid" src="img/service-2.jpg" alt="" />
            </div>
            <div className="col-4">
              <img className="img-fluid" src="img/service-3.jpg" alt="" />
            </div>
            <div className="col-4">
              <img className="img-fluid" src="img/service-4.jpg" alt="" />
            </div>
            <div className="col-4">
              <img className="img-fluid" src="img/service-5.jpg" alt="" />
            </div>
            <div className="col-4">
              <img className="img-fluid" src="img/service-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid text-body copyright py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="fw-semi-bold" href="#">
            Your Site Name
          </a>
          , All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By{" "}
          <a className="fw-semi-bold" href="https://htmlcodex.com">
            Sattva Soul
          </a>{" "}
          Distributed by{" "}
          <a href="https://themewagon.com" target="_blank">
            Sattva Soul
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
</>

</>

  )
}

export default Footer
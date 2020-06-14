import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="row ">
      <div className="header shadow bg-secondary text-white w-100">
        <div className="d-flex align-items-center justify-content-between px-3 h-100">
          <div className="profile ">
            <p className="h3 font-weight-bold">He.</p>
          </div>
          <div className="right">
            <div className="d-flex align-items-center cursor-pointer">
              <i className="bx bx-user mr-1"></i>
              <i
                className="bx bxs-down-arrow text-white bx"
                style={{ fontSize: ".7rem" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Header

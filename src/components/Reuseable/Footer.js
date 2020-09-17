import React from "react"

export default function footer({ currYear }) {
  return (
    <footer>
      <div className="footer-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 pt-2 mx-auto text-center bg-dark text-light">
              <h6>Awesome Copyright footer &copy; {currYear}</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

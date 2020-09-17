import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoblock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus, incidunt aliquid. Eveniet tempora laudantium
              laboriosam. Enim perferendis temporibus sint deleniti tempora odio
              porro? Ratione itaque consequuntur exercitationem maiores. Ex
              voluptatum provident perferendis alias odit consequuntur vitae ad
              aut laboriosam necessitatibus. Esse sit recusandae illo in
              similique perspiciatis ullam eius at! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laboriosam sunt eos nobis,
              architecto eligendi rem aliquam nam quae quisquam culpa quas enim
              laudantium iusto nostrum facere adipisci numquam. Vero quaerat
              voluptatem eveniet perspiciatis nostrum obcaecati fugiat, eligendi
              qui quae harum unde, laboriosam blanditiis optio nisi atque ut
              facilis, aliquid expedita?
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                className="card-img-top"
                src="/static/629eb262a308215aea1b86ea9c0feba5/3aeb2/heromain.png"
                alt="image goes here"
              />
              <div className="card-body">
                <h5 className="card-title text-success">Just click photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nulla assumenda corporis itaque aspernatur quae cupiditate at
                  omnis suscipit. Repudiandae quam itaque facilis consequatur
                  assumenda? Repudiandae voluptatibus nesciunt fuga sit sequi?
                </p>
                <Link to="#" className="btn btn-warning btn-block">
                  A Message from CEO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

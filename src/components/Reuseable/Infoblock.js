import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              delectus, laborum velit excepturi ducimus, nihil eveniet nisi quas
              id doloribus soluta consequuntur atque iusto minus quisquam
              reprehenderit tenetur tempora corporis, dolorum temporibus
              dignissimos neque repellat quidem nulla. Dolorum expedita fugiat
              itaque, laboriosam recusandae quaerat blanditiis magnam esse totam
              enim nam accusantium consectetur autem praesentium nostrum, qui
              sit voluptatibus laborum iure.
            </p>
            <Link to="/about">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

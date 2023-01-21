import React from 'react'
import { Fragment, useState } from 'react'
function Tours({ tours, removetour }) {
  let [readMore, setreadMore] = useState(false)
  return (
    <Fragment>
      <div className="container">
        <h2>Our Tours</h2>
        <div className="underline"></div>
        {tours.map(tour => {
          const { id, name, info, image, price } = tour
          return (<div className="tour" key={Math.random()}>
            <img src={image} alt={name} />
            <footer>
              <div className="tour_info">
                <h4>{name}</h4>
                <h4 className="tour_price">${price}</h4>
              </div>
              <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setreadMore(!readMore)} className="read_more">
                  {readMore ? 'show less' : '  read more'}
                </button>
              </p>
              <div className="delete_container"><button className="delete_btn" onClick={() => removetour(id)}> not interested
              </button></div>

            </footer>
          </div>)
        })}</div>
    </Fragment>
  )
}

export default Tours
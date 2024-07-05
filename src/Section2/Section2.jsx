import React from 'react'
import Card from '../Card/Card'
import icon1 from '../assets/icon-budgeting.svg'
import icon2 from '../assets/icon-onboarding.svg'
import icon3 from '../assets/icon-api.svg'
import icon4 from '../assets/icon-online.svg'
import './Section2.css'
const Section2 = () => {
  let arr=[
    {image:icon1,
    title:'sdfghjnm,cvbnmghjkfgh  cvgbhnjmk',
  content:'Lorem, ipsum dolor sit amet consectetur. Labore cum dicta fugit doloremque.'},
    {image:icon2,
    title:'sdfghjnm,cvbnmghjkfgh  cvgbhnjmk',
  content:'Lorem, ipsum dolor sit amet consectetur. Labore cum dicta fugit doloremque.'},
    {image:icon3,
    title:'sdfghjnm,cvbnmghjkfgh  cvgbhnjmk',
  content:'Lorem, ipsum dolor sit amet consectetur. Labore cum dicta fugit doloremque.'},
    {image:icon4,
    title:'sdfghjnm,cvbnmghjkfgh  cvgbhnjmk',
  content:'Lorem, ipsum dolor sit amet consectetur. Labore cum dicta fugit doloremque.'}
  ]
  return (
    <>
      <div className="section2-main">
        <div className="headding">
          <h3>Why choose Easybank?</h3>
          <p>Lorem, ipsum dolor sit amet consectetur
            . Labore cum dicta fugit doloremque.</p>
        </div>
        <div className="boxes">
          {
            arr.map((val,i)=>(
                <div key={i} className="section2-card">

              <Card   
              content={val.content} 
              title={val.title} image={val.image} />
              </div>
            ))
          }
          </div>
      </div>
    </>
  )
}

export default Section2

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
    title:'  Online Banking',
  content:'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'},
    {image:icon2,
    title:'Simple Budgeting',
  content:'  See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'},
    {image:icon3,
    title:'Fast Onboarding',
  content:' We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'},
    {image:icon4,
    title:' Open API',
  content:'  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'}
  ]
  return (
    <>
      <div className="section2-main">
        <div className="headding">
          <h3>Why choose Easybank?</h3>
          <p> We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
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

import style from '../sass/About.module.scss'
import React from 'react'

const AboutPage = () => {
  return (
  <div className={style.container}>
    <div className={style.txtContainer}>

    <h1>About us</h1>
      <p>
            We started as two lonely souls, each navigating the world alone,
            But fate brought us together, and our hearts became one.
            Through laughter and tears, we&apos;ve built our life&apos;s tale,
            Every step together has filled our days with joy without fail.

            We&apos;ve learned to support each other, to grow and to dream,
            Our love has grown stronger with each passing day, a perpetual stream.
            Now here we stand, ready to promise each other eternal fidelity and happiness,
            A love story written in the stars, for us two, forever.
      </p>
    </div>
  </div>
  )
}

export default AboutPage
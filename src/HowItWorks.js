import React, { useState } from 'react'
import workapi from './API/WorkApi';
import './App.css';
function HowItWorks() {
    const [workData,setWorkData] = useState(workapi);
    console.log(workData)
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How Does It Work</h1>
          <div className="row">
            {workData.map((currElem) => {
                const {id,title,info} = currElem;
                return(
                    <>
                    <div className="col-12 col-lg-4 text-center work-container-subdiv" id={id} >
                    
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                  </>
                )
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks

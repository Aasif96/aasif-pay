import React, {useState} from 'react'
import workApi from "./api/workApi";

const HowItWorks = () => {

  const [workData, setWorkData] = useState(workApi);
    return (
        <>
          <div className="work-container container">
            <h1 className="main-heading text-center">how does it works</h1>
            <div className="row">
              {workData.map( (curElem) => {
                const { id, logo, title, info} = curElem;
                return(
                  <div className=" col-12 col-lg-4 text-center work-conntainer-subdiv">
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h1 className="sub-heading">{title}</h1>
                    <p className="main-hero-para w-100">{info}</p>
                </div>
                );
              })};
                 
            </div>
          </div>
        </>
    )
}

export default HowItWorks

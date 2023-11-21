import React from "react";
import Bottom from "./Navbar";
import Card from './Card';


const Datascience = ({data}) => {
  return (
    <div className="container-fluid">
      <div className="row mx-lg-5 ">
        <div className="col-xl-12 heading mx-lg-5 ">
          <h1 className='my-4'>Data Science</h1>
          <p className='text-justified'>
           Are you ready to step into the world of Data? Then you probably should not
            miss this corner of articles that is an assorted curation out of
            tedious research & exploration.
          </p>

          <p className='text-justified mt-4 mb-5'>
            The GUVI Blog’s Data Science category . High-Quality
            content curated by experts!
          </p>
        </div>
      </div>
      <div className="row">
        <Bottom />

      </div>
      <div className="container">
      <div className="row">
                {
                    data.map((item,index)=>{
                        if(item.id === 'Data Science') 
                            return <Card key={index} data={item} /> 
                            return null; 
                          })
                }
            </div>
    </div></div>
  );
};

export default Datascience;
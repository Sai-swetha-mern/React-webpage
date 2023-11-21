import React from 'react'
import Bottom from './Navbar';
import Card from './Card';
const Fullstack = ({data}) => {
    return (

        <div className="container-fluid">
            <div className="row mx-lg-5  ">
                <div className="col-xl-12 heading mx-lg-5 ">
                    
                    <h1 className='my-5'>Full Stack Development</h1>
                       <p className='text-justified mt-4 mb-5'>The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
                </div>
                
            </div>
            <div className="row">
            <Bottom />
            </div>
            <div className="container">
            <div className="row">
                {
                    data.map((item,index)=>{
                        if(item.id === 'Full stack') 
                            return <Card key={index} data={item} />
                        return null; 
                    })
                }
            </div>
        </div>
        </div>

    )
}

export default Fullstack
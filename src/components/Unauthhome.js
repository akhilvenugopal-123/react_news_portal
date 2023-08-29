import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import "./home.css"


function UnauthHome(){
    const news = useSelector((state) => state.news.items);
   
   
    return(


        <div className="container">
            <Navbar></Navbar>
            <div className="row ">
                <div className="col-12">
                    <p></p><br></br>
                </div>
            </div>
            
            
            
            {news.map((x) => (
                <div className="row" key={x.id}>
                    <div className="card">
                        <div className="card-title">
                            <h2 style={{float:'left'}} >{x.title}</h2>
                            
                        </div>
                        <div className="card-body">
                            <p>{x.detail}</p>
                        </div>
                    </div><br></br>
                </div>
            ))}
        </div>
    )
}

export default UnauthHome;
                    
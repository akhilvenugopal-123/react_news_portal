import React from "react";
import { useSelector,useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { deleteNewsItem  } from "../store/createSlice";
import Navbaradmin from "./Navadmin";
import { Link } from "react-router-dom";
import "./home.css"

function Home(){
    const news = useSelector((state) => state.news.items);
    const dispatch = useDispatch();
    
    
    const handleDeleteNewsItem = (itemId) => {
        dispatch(deleteNewsItem(itemId));
    };
   
    return(

        

        <div className="container">
            <Navbaradmin></Navbaradmin>
            <Link to ="/Add" className="btn btn-info mb-2 mt-2" >Add Content</Link>
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
                            <button className="btn btn-danger" style={{float:'right'}} onClick={() => handleDeleteNewsItem(x.id)}>Delete</button>
                            <Link to ={"/Edit/"+x.id} className="btn btn-info mb-2 " style={{float:'right'}}>Edit</Link>
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

export default Home;
                    
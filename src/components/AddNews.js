import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addNewsItem } from "../store/createSlice";
import { useNavigate } from "react-router-dom";

function AddNews(){

  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemDetails,setNewItemDetails] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const handleAddNewsItem = () => {
    if (newItemTitle && newItemDetails) {
        dispatch(addNewsItem({ id: Date.now(), title: newItemTitle, detail: newItemDetails }));
        navigate('/')

    }
};



  return(
    <div className="container mt-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h2>Add the New Content..</h2>
          {/* <div className="form-control"> */}
            <textarea className="form-control" 
              type='text' value={newItemTitle}
              onChange={(e) => setNewItemTitle(e.target.value)}
              placeholder="Enter  title"></textarea><br/>
            
            <textarea className="form-control" 
              type='text' value={newItemDetails}
              onChange={(e) => setNewItemDetails(e.target.value)}
              placeholder="Enter  Details"></textarea><br/>
            
            <button className="btn btn-success" onClick={handleAddNewsItem}>submit</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default AddNews;


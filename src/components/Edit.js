import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewsItem } from "../store/createSlice";
import { useParams, Link, useNavigate } from "react-router-dom";

function EditNews() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.items);
  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemDetails, setNewItemDetails] = useState("");

  useEffect(() => {
    const newsItem = news.find((x) => x.id === parseInt(itemId));
    if (newsItem) {
      setNewItemTitle(newsItem.title);
      setNewItemDetails(newsItem.detail);
    }
  }, [news, itemId]);

  const handleEditNewsItem = () => {
    if (newItemTitle && newItemDetails) {
      dispatch(
        updateNewsItem({
          id: parseInt(itemId),
          title: newItemTitle,
          detail: newItemDetails,
        })
      );
      navigate('/Home');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8 offset-2">
          <h2>Edit News</h2>
          <div className="form-control">
            <textarea
              className="form-control"
              type="text"
              value={newItemTitle}
              onChange={(e) => setNewItemTitle(e.target.value)}
              placeholder="Enter news title"
            ></textarea>
            <br />

            <textarea
              className="form-control"
              type="text"
              value={newItemDetails}
              onChange={(e) => setNewItemDetails(e.target.value)}
              placeholder="Enter news Details"
            ></textarea>
            <br />

            <button className="btn btn-success" onClick={handleEditNewsItem}>
              Update
            </button>
            <Link to={"/Home"} className="btn btn-info" style={{ float: "right" }}>
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNews;
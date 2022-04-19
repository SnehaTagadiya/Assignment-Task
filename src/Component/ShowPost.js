import axios from "axios";
import React, { useState, useEffect } from "react";
function ShowPost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      setData(response.data);
    });
  };

  const deleteData = (id) => {
    if (window.confirm("are you sure want to delete ")) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          console.log("deleted", response);
        });
    }
  };

  return (
    <div>
      <h1>Show Post</h1>
      {data.slice(0, 20).map((item, i) => (
        <div key={i}>
          <div
            className="card col-6 bg-light mt-5 text-center"
            style={{ marginLeft: "300px" }}
          >
            <div className="container">
              <h6>
                <a
                  href="/postdetail"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {item.title}
                </a>
              </h6>
              <button
                className="btn btn-secondary mt-3"
                onClick={() => deleteData(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowPost;

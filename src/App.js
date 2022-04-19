//import PostData from './Component/PostData';
import "./App.css";
import React from "react";
import PostData from "./Component/PostData";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShowPost from "./Component/ShowPost";
import PostDetail from "./Component/PostDetail";
import Nav from "./Component/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Link to="/"></Link>
        <Link to="/showPost"></Link>
        <Link to="/postdetail"></Link>
        <Routes>
          <Route path="/" element={<PostData />} />
          <Route path="/showpost" element={<ShowPost />} />
          <Route path="/postdetail" element={<PostDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

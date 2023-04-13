import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CommentList } from "./components/CommentList";
import Posts from "./components/posts";
import Banner from "./pages/banner";
import Navigation from "./pages/navigation";

function App() {
  return (
    <div className="w-full max-w-[1344px] mx-auto h-screen flex flex-col justify-start items-center">
      <Router>
        <Navigation />
        <Banner />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:postId" element={<CommentList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

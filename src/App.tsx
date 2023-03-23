import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CommentList } from "./components/CommentList";
import Posts from "./components/posts";
import { Users } from "./components/users";

function App() {
  return (
    <div className="w-full max-w-[1344px] mx-auto h-screen">
      {/* <Router>
        <Routes>
          <Route path="/posts/:postId" element={<CommentList />} />
        </Routes>
      </Router> */}
      <Posts />
      <Users />
    </div>
  );
}

export default App;

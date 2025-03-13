import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import { useDispatch } from "react-redux";
import { setError, setLoading, setPosts } from "./redux/postSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      dispatch(setLoading(true));
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        dispatch(setPosts(data));
        dispatch(setError(null));
      } catch (error) {
        dispatch(setError(error));
      } finally {
        dispatch(setLoading(false));
      }
    };
    getPosts();
  }, []);

  return (
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
  );
}

export default App;

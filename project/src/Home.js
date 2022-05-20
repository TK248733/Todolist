import React, { useState, useEffect } from "react";
import BuildCar from "./BuildCar";
import Loadimage from "./loading.gif"

const Home = () => {
  let [blogs, setBlogs] = useState([]);
  let [islogged, setislogged] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setislogged(false);
        });
    }, 1000);
  }, []);


  let handleDelete = (id) => {
    let newBlogs = blogs.filter((blogs) => blogs.id !==id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      {/* <h1>Homepage</h1> */}
      {/* <h2 id='title'></h2>
            <button onClick={handClick} >Click</button> */}
      {/* <h2 id='count'>{count}</h2>
       */}
      <BuildCar data={blogs} title="All Blogs" func={handleDelete} />
      {islogged &&<img src={Loadimage} style={{width:"300px",margin:"30px"}}></img>}
    </div>
  );
};

export default Home;

import axios from "axios";
import React, { useState, useEffect } from "react";
// import { getData } from "../api";
import News from "../components/News";

const news_data = [
  {
    title: "test title1",
    text: "test text1",
    // img: "",
  },
  {
    title: "test title2",
    text: "test text2",
    img: "",
  },
  {
    title: "test title3",
    text: "test text3",
    img: "https://dynaimage.cdn.cnn.com/cnn/digital-images/org/e878d0ed-bc0c-45fc-81cc-1ac9ead0eeb1.png",
  },
  {
    title: "test title4",
    text: "test text4",
    img: "https://dynaimage.cdn.cnn.com/cnn/digital-images/org/e878d0ed-bc0c-45fc-81cc-1ac9ead0eeb1.png",
  },
];

const Home = () => {
  const [data, setData] = useState([]);

  const getDataApi = async () => {
    await axios
      .get(`http://localhost:5000/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataApi();

    console.log("use effect triggered");
  }, []);

  return (
    <div>
      <h1>HOME PAGE</h1>
      <News data={news_data} />
      {console.log("data: ", data)}
    </div>
  );
};

export default Home;

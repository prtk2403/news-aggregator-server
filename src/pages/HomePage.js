import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [newsitems, setNewsitems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  // const URL = "http://localhost:5000/api/newsitems/getnews";

  const getData = async () => {
    try {
      const result = await axios.get(
        "https://news-one-server.vercel.app/api/newsitems/getnews"
      );
      setNewsitems(result.data);
      // toast("Success" , "success")
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Layout></Layout>
      <div className=" flex align-center w-full">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className=" pl-5 mt-10 ml-10 mr-10 mb-10 border-2 h-10 w-4/5 rounded-sm "
          placeholder="Search News"
        />
      </div>
      {newsitems.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 mx-10 my-10 ">
          {newsitems
            .filter((elem) =>
              elem.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((item) => {
              return (
                <div className="shadow-md p-3 border cursor-pointer rounded-md " onClick={()=> navigate(`/newsdesc/${item._id}`)}>
                  <h1 className="text-black text-lg  font-semibold">
                    {item.title}
                  </h1>
                  <p>{item.description}</p>
                  <span className="text-gray-500 text-sm">By : {item.postedBy.email}</span><br/>
                  <span className="text-gray-500 text-sm">{item.createdAt.slice(0,10)}</span>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default HomePage;

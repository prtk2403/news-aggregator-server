import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PostedNews = () => {
  const [newsitems, setNewsitems] = useState([]);
  const user = JSON.parse(localStorage.getItem("newsone-user"));
  const navigate=useNavigate();
  const getData = async () => {
    try {
      const result = await axios.post(
        "https://news-one-server.vercel.app/api/newsitems/getnewsbyuser",
        { userid: user._id }
      );
      setNewsitems(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const deletenews = async (newsid) => {
    try {
       await axios.post( "https://news-one-server.vercel.app/api/newsitems/deletenews",{
         newsid }
      );
      toast("Deleted Successfully")
      getData();
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
      <h1 className="text-2xl p-10 text-center pl-20 font-semibold">News Posted</h1>
      <div className="p-10 ">
        {newsitems.length > 0 && (
          <div>
            <table className="w-full border-2 rounded-lg border-gray-500 p-10">
              <thead className="w-full">
                <tr className="w-full">
                  <th className="border-2  border-gray-500 p-2">ID</th>
                  <th className="border-2  border-gray-500 p-2">Title</th>
                  <th className="border-2  border-gray-500 p-2">Posted On</th>
                  <th className="border-2  border-gray-500 p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {newsitems.map((item) => {
                  return (
                    <tr>
                      <td className="border-2  border-gray-500 p-2">
                        {item._id}
                      </td>
                      <td className="border-2  border-gray-500 p-2">
                        {item.title}
                      </td>
                      <td className="border-2  border-gray-500 p-2">
                        {item.createdAt.slice(0, 10)}
                      </td>
                      <td className="border border-gray-500 p-2 flex justify-center items-center">
                        <div className="flex justify-end space-x-5 pr-5 mt-5">
                          <button className="rounded-xl text-sm px-5 py-1 bg-red-500 " onClick={() => deletenews(item._id)}>
                            DELETE
                          </button>
                          <button className="rounded-xl text-sm px-5 py-1 bg-green-500 " onClick={() => navigate(`/edit/${item._id}`)}>
                            EDIT
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default PostedNews;

import React, { useEffect } from "react";
import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Layout from "../components/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";

const AddNews = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading,setLoading] = useState(false);
  const navigate=useNavigate();
  const user=JSON.parse(localStorage.getItem('newsone-user'))
  useEffect(() => {
    console.log(convertToRaw(editorState.getCurrentContent()));
  }, [editorState]);
  const URL = "https://news-one-server.vercel.app/api/newsitems/addnews";
  const save = async () => {
    setLoading(true);
    try {
      const payload = {
        title,
        description,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        postedBy: {
          userid : user._id,
          email : user.email
        },
      };
      await axios.post(URL, payload);
      setLoading(false);
      toast("News Added Successfully" , "success");
      navigate('/home');
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast("Something Went Wrong!!" , "error");
    }
  };
  return (
    <div>
      <Layout> </Layout>
      <h1 className="text-2xl mt-5 mb-5 text-center">Add News</h1>
      <div className="px-5 py-2">
        {/* <p className="px-5 w-20 flex align-center ">Title : </p> */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border-2 h-10 w-3/4 rounded-sm "
          placeholder="Enter Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 w-3/4 my-2 "
          rows={"4"}
          placeholder="Enter Description"
        ></textarea>
      </div>
      <div className=" w-3/4 border-2 mx-5 px-2 rounded">
        <Editor
          editorClassName="draft-editor"
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
      <div className="flex justify-end space-x-5 pr-5 mt-5">
        <button className="rounded-xl text-sm px-5 py-2 bg-red-600 ">
          BACK
        </button>
        <button
          className="rounded-xl text-sm px-5 py-2 bg-green-600 "
          onClick={save}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default AddNews;

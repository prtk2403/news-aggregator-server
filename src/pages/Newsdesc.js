import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import draftjsToHtml from 'draftjs-to-html';
const Newsdesc = () => {
    const params = useParams();
    const [newsItem,setNewsItems]=useState(null);
    const getData = async () => {
        try {
          const result = await axios.post(
            "https://news-one-server.vercel.app/api/newsitems/getnewsbyid" , {newsid : params.newsid}
          );
          setNewsItems(result.data);
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
    <div className='p-5'>
        <h1 className='my-3 text-2xl font-semibold'>{newsItem?.title}</h1>
        <h3>{newsItem!==null && ReactHtmlParser(draftjsToHtml(JSON.parse(newsItem.content)))}</h3>
    </div>
    </>
  )
}

export default Newsdesc
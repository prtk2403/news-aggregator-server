// AboutUs.js

import React from 'react';
import Layout from '../components/Layout';

const AboutUs = () => {
  return (
    <div className="w-full">
    <Layout></Layout>
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white shadow-lg rounded-md">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="mb-4">
          Welcome to NewOne – Where Information Meets Innovation! At NewOne, we
          believe in the power of knowledge and the transformative impact of
          staying informed.
        </p>
        <h3>Our Vision</h3>
      <p>
        NewOne envisions a world where every individual is empowered by access
        to accurate, relevant, and thought-provoking information. We strive to
        be a leading source of news that transcends borders, bringing people
        together through a shared understanding of the world.
      </p>
      <h3>Who We Are</h3>
      <p>
        <strong>Passionate Storytellers:</strong> We are a team of dedicated
        journalists, writers, and storytellers who are passionate about
        uncovering the truth and presenting it in a compelling way.
      </p>
      <p>
        <strong>Innovation at the Core:</strong> In a rapidly evolving digital
        landscape, we embrace innovation. From multimedia-rich storytelling to
        cutting-edge analysis, we leverage technology to enhance your news
        consumption experience.
      </p>
      <h3>Our Values</h3>
      <p>
        <strong>Accuracy and Integrity:</strong> We uphold the highest
        standards of accuracy and integrity in our reporting. You can trust
        that the information you find on NewOne is thoroughly researched and
        verified.
      </p>
      <p>
        <strong>Diversity of Perspectives:</strong> We celebrate diversity – in
        perspectives, voices, and stories. Our commitment to inclusivity ensures
        that our content reflects the richness of the global community.
      </p>
      <p>
        <strong>User-Centric Approach:</strong> Your experience matters. We
        prioritize a user-centric approach in designing our platform, making it
        easy for you to find, engage with, and share the stories that resonate
        with you.
      </p>
      <h3>Get Involved</h3>
      <p>
        NewOne is more than a news website; it's a community. Join us in the
        pursuit of knowledge, share your thoughts, and be a part of the
        conversations shaping our world. Connect with us on social media,
        subscribe to our newsletters, and download our app to stay connected on
        the go.
      </p>
        <p>
          Thank you for choosing NewOne as your trusted source for news.
          Together, let's explore the ever-changing landscape of information
          with curiosity, openness, and a commitment to understanding the world
          around us.
        </p>
        <p>— The NewOne Team</p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;

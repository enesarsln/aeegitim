import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogTopContent from "../components/Blog/BlogTopContent";
import BlogPosts from "../components/Blog/BlogPosts";
import BlogPageBottom from "../components/Blog/BlogPageBottom";
import Footer from "../components/_App/Footer";

const Blog = () => {
    return(
        <>
        <Navbar />

        <PageBanner
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Anasayfa"
        activePageText="Blog"
        imgClass="bg-1"
      />

      <BlogTopContent />

      <BlogPosts />

      <BlogPageBottom />

      <Footer />
        </>
    )
}

export default Blog
import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import BlogTopContent from "../components/Blog/BlogTopContent";
import BlogPosts from "../components/Blog/BlogPosts";
import BlogPageBottom from "../components/Blog/BlogPageBottom";
import Footer from "../components/_App/Footer";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>AE Eğitim ve Yayıncılık</title>
        <meta name="description" content="AE Eğitim ve Yayıncılık Blog" />
        <meta name="keywords" content="ae eğitim blog, blog" />
      </Head>

      <Navbar />

      <PageBanner
        pageTitle="Blog"
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
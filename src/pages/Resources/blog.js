import React from "react";
import Main from "../../components/layout/Main";

const samplePosts = [
  {
    id: 1,
    title: "How to Download YouTube Videos in High Quality",
    excerpt: "Learn the best and safest methods to download your favorite YouTube videos in 1080p, 4K, and even 8K without any hassle. We cover both online tools and software.",
    author: "John Doe",
    date: "August 25, 2024",
    category: "Tutorials",
  },
  {
    id: 2,
    title: "Top 5 Tips for Saving Instagram Reels Offline",
    excerpt: "Instagram Reels are fun, but what if you want to watch them later? Here are five simple tricks to save Reels directly to your device's gallery.",
    author: "Jane Smith",
    date: "August 22, 2024",
    category: "Tips & Tricks",
  },
  {
    id: 3,
    title: "Understanding Video Formats: MP4 vs. MKV vs. WEBM",
    excerpt: "Ever wondered about the difference between various video file formats? This guide breaks down the pros and cons of MP4, MKV, and WEBM for you.",
    author: "Alex Johnson",
    date: "August 18, 2024",
    category: "Tech Explained",
  },
];

const Blog = () => {
  return (
    <Main>
      <div className="legal-container blog-page">
        <div className="container py-4 py-md-5">
          <div className="legal-header text-center mb-5">
            <h1 className="mb-3">Welcome to Our Blog</h1>
            <p className="text-muted">Tips, tricks, and updates from the ClickXpert team.</p>
          </div>

          <div className="row g-4">
            {samplePosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="blog-card">
                  <span className="blog-card-category">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Blog;

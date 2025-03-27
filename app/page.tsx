import "./styles.css";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row main-content">

        {/* Right Content Area */}
        <div className="col-md-9 col-lg-10">
          {/* Sticky Toolbar */}
          <div className="sticky-toolbar">
            <button className="btn btn-primary">New Post</button>
            <button className="btn btn-secondary">Sort</button>
          </div>

          {/* Blog Content (Only this section scrolls) */}
          <div className="blog-content p-3">
            <h2>Blog Title</h2>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>More blog content here...</p>
            <p>Keep scrolling to see more...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>More blog content here...</p>
            <p>Keep scrolling to see more...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>More blog content here...</p>
            <p>Keep scrolling to see more...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>More blog content here...</p>
            <p>Keep scrolling to see more...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>More blog content here...</p>
            <p>Keep scrolling to see more...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>More blog content here...</p>
            <p>Keep scrolling to see more...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>More blog content here...</p>
            <p>Keep scrolling to see more...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>More blog content here...</p>
            <p>Keep scrolling to see more...</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p>More blog content here...</p>
            <p>Keep scrolling to see more...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

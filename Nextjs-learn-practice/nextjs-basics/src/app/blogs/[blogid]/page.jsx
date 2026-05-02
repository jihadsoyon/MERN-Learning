
 const blogs = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    author: "John Doe",
    date: "2026-01-15",
    category: "Programming",
    tags: ["JavaScript", "Beginner", "Web Development"],
    content: "JavaScript is one of the most popular programming languages used for building web applications. In this blog, we will explore the basics...",
    imageUrl: "https://example.com/images/js-blog.jpg",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Top 10 Travel Destinations for 2026",
    author: "Emily Smith",
    date: "2026-02-10",
    category: "Travel",
    tags: ["Travel", "Destinations", "Adventure"],
    content: "Looking for your next adventure? Here are the top 10 travel destinations you should consider visiting in 2026...",
    imageUrl: "https://example.com/images/travel-blog.jpg",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "Healthy Eating: A Beginner's Guide",
    author: "Michael Brown",
    date: "2026-03-05",
    category: "Health",
    tags: ["Health", "Nutrition", "Lifestyle"],
    content: "Eating healthy doesn't have to be complicated. In this guide, we break down simple steps to improve your diet...",
    imageUrl: "https://example.com/images/health-blog.jpg",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Understanding Artificial Intelligence",
    author: "Sarah Johnson",
    date: "2026-04-01",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Tech"],
    content: "Artificial Intelligence is transforming industries around the world. This blog explains the fundamentals of AI and its applications...",
    imageUrl: "https://example.com/images/ai-blog.jpg",
    readTime: "8 min"
  }
];

const BlogDetailPage = async ({ params }) => {
    const { blogid } = await params;
    const blog = blogs.find(blog => blog.id === parseInt(blogid));
    console.log('show ne params', blog)
    return (
        <div>
            <h4 className="text-3xl">Blog detail coming soon</h4>
            {blog && <div>
              <h2 className="text-4xl font-bold mb-2">{blog.title}</h2>
              <p>{blog.content}</p>
            
            </div>}
        </div>
    );
};

export default BlogDetailPage;
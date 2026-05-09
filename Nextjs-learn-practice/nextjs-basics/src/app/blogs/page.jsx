import Link from "next/link";
import { Roboto, Poppins } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Blogs',
  description: 'All the users information',
}

const BlogsPage = () => {

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

    return (
        <div className={poppins.className}>
            <h2 className="text-3xl font-bold mb-4">Blogs</h2>
            {blogs.map(blog => <div key={blog.id}>
                <h3 className="text-4xl font-bold mb-2">{blog.title}</h3>
                <Link href={`/blogs/${blog.id}`}>Show details</Link>
            </div>)}
        </div>
    );
};

export default BlogsPage;
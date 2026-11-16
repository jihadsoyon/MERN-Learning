

const PostsPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();


    return (
        <div>
            <h2>Posts: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;
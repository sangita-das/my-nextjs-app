import PostCard from "@/components/PostCard/PostCard";


const PostPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        next: {
            revalidate:30,
        }
        // cache: 'force-cache',  it make html file in build time
        // cache: 'no-store',  that means server site rendering, it will only make html file upon user request
    });
    const posts = await res.json();
    // console.log(posts)
    return (
        <div>
            <h1 className="text-3xl text-center">All Post</h1>
            <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
                {
                    posts.map((post) => (
                     <PostCard key ={post.id} post ={ post} />
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;
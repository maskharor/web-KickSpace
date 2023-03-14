function Blog({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li style={{color: "white"}}>{post.name}</li>
        ))}
      </ul>
    )
  }
  
  export async function getStaticProps() {
    try{
    const res = await fetch('https://jsonplaceholder.ir/users')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    };  
    }catch (error) {
        console.log("error bang Al");
    }
    
}
  
  export default Blog;
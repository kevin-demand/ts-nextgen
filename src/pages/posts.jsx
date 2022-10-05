import Layout from "@/components/layout/Layout"

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    return {
      props: { posts: data }
    }
  }
  
  const Posts = ({ posts }) => {
    //console.log(posts)
  
    return (
        <Layout>
      <div>
        <h1>All Posts</h1>
        {posts.map(posts=> (
          <div key={posts.id}>
            <a className="">
              <h3>{ posts.title }</h3>
            </a>
          </div>
        ))}
      </div>
      </Layout>
    );
  }
   
  export default Posts;
  
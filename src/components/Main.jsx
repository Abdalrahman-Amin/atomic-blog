import FormAddPost from "./FormAddPost";

function Main({ posts, onAddPost }) {
   return (
      <main>
         <FormAddPost onAddPost={onAddPost} />
         <Posts posts={posts} />
      </main>
   );
}

function Posts({ posts }) {
   return (
      <section>
         <List posts={posts} />
      </section>
   );
}



function List({ posts }) {
   return (
      <ul>
         {posts.map((post, i) => (
            <li key={i}>
               <h3>{post.title}</h3>
               <p>{post.body}</p>
            </li>
         ))}
      </ul>
   );
}

export default Main;

'use server'
import Posts from "@/app/ui/components/posts/Post"
import { connectToDB, getPosts } from "@/app/lib/data"

export default async function Page(){
    const client = await connectToDB();
    const posts = await getPosts();
    console.log(posts)
    if(!posts){
        return(
            <h1>No Posts </h1>
        )
    }
    
    return (
        <>   <h2>posts</h2>
        {posts?.map((post) => (
            <Posts id={post.id}
                title={post.title} 
                content={post.content} 
                date={post.date} key={post.id}/>            
        ))}
        </>
        
    )
}
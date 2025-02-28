'use server'
import Posts from "@/app/ui/components/posts/Post"
import { connectToDB, getPosts } from "@/app/lib/data"
import Link from "next/link"
import { Button } from "@/app/ui/components/button"

export default async function Page(){
    const client = await connectToDB();
    const posts = await getPosts();

    if(!posts){
        return(
            <h1>No Posts </h1>
        )
    }
    
    return (
        <>   
        <Link href="/blog/post/insert"><Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New +</Button></Link> 

        {posts?.map((post) => (
            <Posts id={post.id}
                title={post.title} 
                content={post.content} 
                date={post.date} key={post.id}/>            
        ))}
        </>
        
    )
}
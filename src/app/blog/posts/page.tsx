import { posts } from "@/app/lib/placeholder-data"
import Posts from "@/app/ui/components/posts/Post"

export default function Page(){

    return (
        <>
        <h2>Posts</h2>

        {posts.map((post) => (
            <Posts 
            key={post.id}
            {...post}/>            
        ))}
        </>
        
    )
}
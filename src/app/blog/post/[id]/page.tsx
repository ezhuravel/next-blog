import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id);
  if (!post) {
    return <h1>Post not found</h1>;
  }
  
  return (
    <>
      <h1>Post</h1>
      
      <Post {...post}  />
    </>)
}
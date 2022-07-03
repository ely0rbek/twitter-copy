import PostListitem from "../PostListitem/PostListitem";
import './PostList.css'
export default function PostList({ posts, removepost,onToggleImportant,onToggleLiked }) {

    return (
        <ul className="app-list list-group">
            {
                posts.length ?
                    posts.map((post) => {
                        const { id, ...ItemPost } = post;
                        return (
                            <PostListitem {...ItemPost}
                                key={post.id}
                                removepost={() => removepost(id)}
                                onToggleImportant={()=> onToggleImportant(id)}
                                onToggleLiked={()=> onToggleLiked(id)}
                            />)
                    }) : <h2>Malumot qolmadi.</h2>
            }
        </ul>
    )
}
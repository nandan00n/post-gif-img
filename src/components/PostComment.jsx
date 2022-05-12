import PostForm from "./PostForm";

const PostComment = ({
  post,
  replies,
  currentUserId,
  updatePost,
  deletedPost,
  addPost,
  activePost,
  setActivePost,
  parentId = null, }) => {
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(post.createdAt) > fiveMinutes;
  const canReply = (Boolean(currentUserId))
  const canEdit = currentUserId === post.userId
  const canDelete = currentUserId === post.userId && !timePassed;
  const createdAt = new Date(post.createdAt).toLocaleDateString();
  const isReplying = activePost &&
    activePost.type === "replying"
    && activePost.id === post.id;

  const isEditing = activePost &&
    activePost.type === "editing"
    && activePost.id === post.id;

  const replyId = post.parentId ? parentId : post.id;

  return (
    <div className="post">
      <div className="post__img__container">
        <img src={require("../images/user-icon.png")} alt="icon" />
      </div>

      <div className="post__right__part" style={{ backgroundColor: "white", borderRadius: "10px" }}>
        <div className="post__content">
          <div className="post__author" >{post.username}</div>

          <div>{createdAt}</div>
        </div>
        {!isEditing && <div className="post__text" style={{ marginRight: "5vw" }}>{post.body}</div>}
        {isEditing && (
          <PostForm submitLabel="Update"
            hasCancelButton
            initialText={post.body}
            handleSubmit={(text) => updatePost(text, post.id)}
            handleCancel={() => setActivePost(null)} />
        )}
        <div className="post__actions" >
          {canReply && <div className="post__action"
            onClick={() => setActivePost({ id: post.id, type: 'replying' })
            }>Reply</div>}
          {canEdit && <div className="post__action"
            onClick={() => setActivePost({ id: post.id, type: 'editing' })
            }>Edit</div>}
          {canDelete && <div className="post__action"
            onClick={() => deletedPost(post.id)}>Delete</div>}
        </div>
        {isReplying && (
          <PostForm submitLabel="Reply"
            handleSubmit={(text) => addPost(text, replyId)} />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map(reply => (
              <PostComment post={reply}
                key={reply.id}
                replies={[]}
                // setActivePost={setActivePost}
                currentUserId={currentUserId}
                addPost={addPost}
                updatePost={updatePost}
                deletedPost={deletedPost}
                parentId={post.id} />

            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PostComment
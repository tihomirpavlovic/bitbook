import Post from './Post.js';
class VideoPost  extends Post{
    constructor(post) {
        super(post);
        this.videoUrl = post.videoUrl; 
       
    }
}

export default VideoPost;
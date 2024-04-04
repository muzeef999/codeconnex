import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

let Post;

try {
  Post = mongoose.model("post");
} catch {
  Post = mongoose.model("post", postSchema);
}

export default Post;

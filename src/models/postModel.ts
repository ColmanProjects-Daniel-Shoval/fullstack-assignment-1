import mongoose, { Document, Schema } from 'mongoose';

export interface IPost extends Document {
  senderId: string;
  text: string;
  date: Date;
  image: string;
}

const PostSchema = new Schema<IPost>({
  senderId: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: false },
});

const PostModel = mongoose.model<IPost>('Post', PostSchema);

export default PostModel;

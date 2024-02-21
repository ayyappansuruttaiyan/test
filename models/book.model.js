import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  //   tags: {
  //     type: Array,
  //     required: true,
  //   },
  //   isPublished: {
  //     type: Boolean,
  //     required: false,
  //   },
  //   author: {
  //     type: String,
  //     required: true,
  //   },
  //   year: {
  //     type: Number,
  //     required: false,
  //   },
});
const BookModel = mongoose.model("Book", BookSchema);
export default BookModel;

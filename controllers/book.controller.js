import BookModel from "../models/book.model.js";

const getAllBooks = async (req, res) => {
  const books = await BookModel.find();

  try {
    if (!books) {
      res.status(404).json({ message: "No books found" });
    } else {
      res.status(200).json(books);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createBook = async (req, res) => {
  try {
    const { name } = req.body;
    const newName = name;
    const book = await BookModel.create({ newName });
    if (book) {
      return res.status(200).json({ message: `book added success`, book });
    }
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  const book = await BookModel.find({ _id: id });
  try {
    if (book) {
      return res
        .status(200)
        .json({ message: `book found with the given id: ${id}` });
    }

    if (book) return res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
export default { getAllBooks, getBookById, createBook };
// export default bookControllers = { getAllBooks, getBookById, createBook };

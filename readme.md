
# Book Management API

This project is a simple RESTful API for managing a collection of books using Node.js, Express, and MongoDB. It allows users to create, read, update, and delete book records.

## Features

- **Create a Book**: Add a new book to the collection.
- **Get All Books**: Retrieve a list of all books.
- **Get a Single Book**: Retrieve details of a book by its ID.
- **Update a Book**: Modify details of an existing book by its ID.
- **Delete a Book**: Remove a book from the collection by its ID.

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- MongoDB (Make sure you have MongoDB installed and running locally or use a cloud-based MongoDB service)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Moiz-stack/book-management-api.git
    cd book-management-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up MongoDB:

   Ensure that your MongoDB server is running locally on `mongodb://localhost:27017/books`. You can change the connection string in the `mongoose.connect()` function in `app.js` if your setup is different.

### Running the Server

Start the server with:

```bash
node app.js
```

The server will start on `http://localhost:3000`.

## API Endpoints

- **Create a Book**
  - **POST** `/book/create`
  - Request Body: JSON containing book details (e.g., title, author, etc.)
  - Response: JSON with a success message and the created book

- **Get All Books**
  - **GET** `/book/create`
  - Response: JSON with a success message and the list of all books

- **Get a Book by ID**
  - **GET** `/book/create/:id`
  - URL Parameter: `id` (Book ID)
  - Response: JSON with a success message and the book details

- **Update a Book by ID**
  - **PUT** `/book/create/:id`
  - URL Parameter: `id` (Book ID)
  - Request Body: JSON containing updated book details
  - Response: JSON with a success message and the updated book

- **Delete a Book by ID**
  - **DELETE** `/book/create/:id`
  - URL Parameter: `id` (Book ID)
  - Response: JSON with a success message and the deleted book



# Book & User Management API

This project is a RESTful API for managing a collection of books and users, utilizing the **MVC (Model-View-Controller)** architecture. The API allows users to perform CRUD (Create, Read, Update, Delete) operations for both books and user records. The application is built using **Node.js**, **Express**, and **MongoDB**.

## Features

### Book Management:
- **Create a Book**: Add a new book to the collection.
- **Get All Books**: Retrieve a list of all books.
- **Get a Book by ID**: Retrieve details of a book by its ID.
- **Update a Book**: Modify details of an existing book by its ID.
- **Delete a Book**: Remove a book from the collection by its ID.
- **Search Books by Title or Author**: Retrieve books based on their title or author.

### User Management:
- **Create a User**: Add a new user to the database.
- **Get All Users**: Retrieve a list of all users.
- **Get a User by ID**: Retrieve details of a user by their ID.
- **Update a User**: Modify details of an existing user by their ID.
- **Delete a User**: Remove a user from the database by their ID.

## MVC Architecture
The project follows the **MVC (Model-View-Controller)** pattern:

- **Model**: Defines the data structure using Mongoose schemas for books and users.
- **Controller**: Contains the logic for handling requests and responses.
- **Routes**: Defines the API endpoints and maps them to the appropriate controller methods.

## Getting Started

### Prerequisites
- **Node.js** (v14 or above)
- **MongoDB** (Make sure MongoDB is installed and running locally, or use a cloud-based MongoDB service)

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

    Ensure that your MongoDB server is running locally on `mongodb://localhost:27017/bookDB` for books and `mongodb://localhost:27017/userDB` for users. You can change the connection string in the `mongoose.connect()` function in `app.js` if your setup is different.

## Running the Server

Start the server with:

```bash
node app.js
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Book Management

- **Create a Book**  
  **POST** `/book/create`  
  Request Body: JSON containing book details (e.g., `title`, `author`, etc.)  
  Response: JSON with a success message and the created book.

- **Get All Books**  
  **GET** `/book`  
  Response: JSON with a success message and the list of all books.

- **Get a Book by ID**  
  **GET** `/book/:id`  
  URL Parameter: `id` (Book ID)  
  Response: JSON with a success message and the book details.

- **Update a Book by ID**  
  **PUT** `/book/:id`  
  URL Parameter: `id` (Book ID)  
  Request Body: JSON containing updated book details  
  Response: JSON with a success message and the updated book.

- **Delete a Book by ID**  
  **DELETE** `/book/:id`  
  URL Parameter: `id` (Book ID)  
  Response: JSON with a success message and the deleted book.

- **Get a Book by Title**  
  **GET** `/book/title/:title`  
  URL Parameter: `title` (Book Title)  
  Response: JSON with a success message and the book details.

- **Get a Book by Author**  
  **GET** `/book/author/:author`  
  URL Parameter: `author` (Book Author)  
  Response: JSON with a success message and the book details.

### User Management

- **Create a User**  
  **POST** `/user/create`  
  Request Body: JSON containing user details (e.g., `name`, `email`, etc.)  
  Response: JSON with a success message and the created user.

- **Get All Users**  
  **GET** `/user`  
  Response: JSON with a success message and the list of all users.

- **Get a User by ID**  
  **GET** `/user/:id`  
  URL Parameter: `id` (User ID)  
  Response: JSON with a success message and the user details.

- **Update a User by ID**  
  **PUT** `/user/:id`  
  URL Parameter: `id` (User ID)  
  Request Body: JSON containing updated user details  
  Response: JSON with a success message and the updated user.

- **Delete a User by ID**  
  **DELETE** `/user/:id`  
  URL Parameter: `id` (User ID)  
  Response: JSON with a success message and the deleted user.

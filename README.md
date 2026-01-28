# Fullstack Assignment 1

This is a REST API for a simple blog application for Fullstck assignment for colman, built with Node.js, Express, and MongoDB.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Setup**:
    - Create a `.env` file in the root directory (copy from `.env.example`).
    - Set `PORT` (default 3000) and `DATABASE_URL`.

3.  **Run the server**:
    - Development: `npm run dev`
    - Production: `npm start`

## API Endpoints

### Posts
- `GET /posts`: Get all posts.
- `GET /posts/:id`: Get a post by ID.
- `POST /posts`: Create a new post.
- `PUT /posts/:id`: Update a post by ID.

### Comments
- `GET /comment/:id`: Get a comment by ID.
- `POST /comment`: Create a new comment.
- `PUT /comment/:id`: Update a comment by ID.
- `DELETE /comment/:id`: Delete a comment by ID.

## Testing
Use the `request.rest` file with the VS Code REST Client extension to test the endpoints.
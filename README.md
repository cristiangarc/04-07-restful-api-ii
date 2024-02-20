
# Exercise: Building RESTful Endpoints for a "User" Resource in Express

## Objective
Enhance your skills in creating RESTful APIs by developing a CRUD interface for a "User" resource using Express. This exercise will deepen your understanding of handling different HTTP methods, structuring Express applications, and managing in-memory data.

## Resource Description
**Resource:** User
- **Fields:**
  - `id` (number): A unique identifier for each user.
  - `username` (string): The user's username.
  - `email` (string): The user's email address.
  - `isActive` (boolean): Flag indicating whether the user's account is active.

## Setup Instructions

### 1. Fork and Clone the Repository
- Fork the provided GitHub repository to create a copy in your account.
- Clone the forked repository to begin working on the project locally.

### 2. Initialize Your Project
- Run `npm init -y` within your project directory to create a `package.json` file.
- Install Express with `npm install express`.
- For testing, install Jest and Supertest: `npm install --save-dev jest supertest`.

### 3. Create Your Express Application
- In `index.js`, set up your Express app and define routes for the User resource.
- Export the Express app from `index.js`.

### 4. Configure the Server Listener
- Create a `server.js` file to import the Express app and initiate the server on port 3000.

## Implementation Tasks

Implement CRUD operations for the User resource:
- `GET /users`: List all users.
- `POST /users`: Create a new user.
- `GET /users/:id`: Retrieve details of a specific user by ID.
- `PUT /users/:id`: Update a user's information by ID.
- `DELETE /users/:id`: Delete a user by ID.

## Testing Your Application

### Setup Tests
- Use the provided test file `userRoutes.test.js` to write tests for each endpoint.
- Ensure your `package.json` includes a test script: `"test": "jest"`.

### Running Tests
- Test your API by executing `npm test`, ensuring each endpoint functions as expected.

## Submission Guidelines

### Push Your Changes
- After completing the exercise, push your changes to your fork on GitHub.

### Create a Pull Request
- Submit a pull request to the original repository for review.

## Tips for Success
- Pay attention to HTTP status codes and response structures.
- Manually test your API with tools like Postman or cURL.
- Refer to the Express documentation for additional guidance.

This exercise is designed to solidify your backend development skills by focusing on creating a fully functional RESTful API for managing users with Express.

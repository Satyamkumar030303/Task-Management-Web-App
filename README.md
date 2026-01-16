Task Management Web App
A full stack task management application built with React, Node.js, Express and MongoDB.

Features
User Registration & Login (JWT Authentication)
Password hashing with bcrypt
Protected dashboard route
CRUD operations on tasks
Search filter
Logout functionality
Token based API security
Tech Stack
Frontend:

React
Axios
React Router
Backend:

Node.js
Express.js
MongoDB
Mongoose
JWT
Bcrypt
Project Flow
User registers → data stored in MongoDB with hashed password.
User logs in → JWT token generated.
Token stored in localStorage.
Dashboard uses token to access protected APIs.
User can create, read, delete tasks.
Logout clears token.
API Endpoints
POST /api/auth/register
POST /api/auth/login
GET /api/tasks
POST /api/tasks
DELETE /api/tasks/:id

Security
JWT authentication middleware
Password hashing using bcrypt
Token validation on protected routes
How to Run
Backend: npm install node server.js

Frontend: npm install npm run dev

Author
Satyam Kumar Frontend Developer Intern Candidate

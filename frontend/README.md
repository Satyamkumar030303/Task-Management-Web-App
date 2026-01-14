# Task Management Web App

A full stack task management application built with React, Node.js, Express and MongoDB.

## Features

- User Registration & Login (JWT Authentication)
- Password hashing with bcrypt
- Protected dashboard route
- CRUD operations on tasks
- Search filter
- Logout functionality
- Token based API security

## Tech Stack

Frontend:
- React
- Axios
- React Router

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt

## Project Flow

1. User registers → data stored in MongoDB with hashed password.
2. User logs in → JWT token generated.
3. Token stored in localStorage.
4. Dashboard uses token to access protected APIs.
5. User can create, read, delete tasks.
6. Logout clears token.

## API Endpoints

POST /api/auth/register  
POST /api/auth/login  
GET /api/tasks  
POST /api/tasks  
DELETE /api/tasks/:id  

## Security

- JWT authentication middleware
- Password hashing using bcrypt
- Token validation on protected routes

## How to Run

Backend:
npm install
node server.js

Frontend:
npm install
npm run dev

## Author
Satyam Kumar
Frontend Developer Intern Candidate
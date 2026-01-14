👁️ Eye Reporter – Backend (Node.js & Express)

A simple RESTful backend API built with Node.js and Express that allows users to submit and retrieve reports.
This project is designed for learning purposes and demonstrates backend fundamentals such as routing, controllers, and in-memory data storage.

📌 Project Purpose

The Eye Reporter Backend helps students understand:

How backend servers work

REST API concepts

Express.js project structure

Controllers and routes separation

How frontend applications communicate with a backend

In-memory data storage (without a database)

⚠️ Note:
This backend does not use a database. All data is stored temporarily in memory and will be lost when the server restarts.

🛠️ Technology Stack

Node.js – JavaScript runtime

Express.js – Web framework

CORS – Enables frontend–backend communication

Nodemon – Development auto-reload

Postman – API testing

📁 Project Structure
eye-reporter-backend/
│
├── src/
│   ├── controllers/
│   │   └── reportController.js   # Business logic
│   │
│   ├── routes/
│   │   └── reportRoutes.js       # API routes
│   │
│   ├── data/
│   │   └── reportStore.js        # In-memory data storage
│   │
│   ├── app.js                    # App configuration & middleware
│   └── server.js                 # Server entry point
│
├── package.json
└── README.md

🔄 Application Flow

Server starts and listens for requests

Frontend sends a report using a POST request

Backend validates the request data

Report is stored in an in-memory array

Frontend requests all reports using GET

Backend returns stored reports as JSON

🚀 Getting Started
1️⃣ Prerequisites

Make sure you have installed:

Node.js (v16 or higher)

npm (comes with Node.js)

Postman (optional but recommended)

2️⃣ Installation

Clone the repository:

git clone https://github.com/webiqpro/backend-eyereporter.git
cd eye-reporter-backend


Install dependencies:

npm install

3️⃣ Run the Server
Development mode (recommended)
npm run dev

Production mode
npm start


Server will run on:

http://localhost:5000

📡 API Endpoints
➕ Submit a Report

Endpoint

POST /api/reports


Request Body (JSON)

{
  "title": "Broken Street Light",
  "description": "The street light near the market is not working",
  "category": "Infrastructure",
  "location": "Downtown"
}


Response

{
  "success": true,
  "message": "Report submitted successfully",
  "data": {
    "id": 1,
    "title": "Broken Street Light",
    "description": "The street light near the market is not working",
    "category": "Infrastructure",
    "location": "Downtown",
    "createdAt": "2026-01-13T10:00:00.000Z"
  }
}

📄 Get All Reports

Endpoint

GET /api/reports


Response

{
  "success": true,
  "totalReports": 1,
  "data": [
    {
      "id": 1,
      "title": "Broken Street Light",
      "description": "...",
      "category": "Infrastructure",
      "location": "Downtown",
      "createdAt": "2026-01-13T10:00:00.000Z"
    }
  ]
}

✅ Validation Rules

Each report must include:

title

description

category

location

❌ Requests missing any field will return:

{
  "success": false,
  "message": "All fields are required"
}

🧠 Data Storage Explanation

Reports are stored in a JavaScript array

Data is not persistent

Restarting the server clears all reports

📌 Learning Insight:
This demonstrates why real-world applications use databases such as MongoDB, PostgreSQL, or MySQL.

🎯 Learning Outcomes

After completing this project, students should be able to:

Explain REST API concepts

Describe backend folder structure

Understand controllers vs routes

Validate incoming request data

Test APIs using Postman

Explain why databases are important

🔮 Possible Improvements

Add a database (MongoDB / PostgreSQL)

Add authentication (JWT)

Add pagination

Add request logging

Add error-handling middleware

Add API documentation (Swagger)

👨‍💻 Author

Eye Reporter Backend
Built for educational and learning purposes.

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it for learning and development.
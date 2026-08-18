-Task Manager API-

# Node.js Express REST API with JWT Authentication & MongoDB

A robust, secure backend API built with **Node.js**, **Express**, and **Mongoose**, featuring token-based authentication using **JSON Web Tokens (JWT)**. This project is structured for backend-only testing via **Postman**, using **usernames** and passwords for authentication.

---

## 🚀 Features

* **User Authentication:** Secure registration and login using usernames, hashed passwords, and JWTs.
* **Protected Routes:** Custom `authMiddleware` that secures task routes by validating Bearer tokens.
* **Database Integration:** MongoDB connection managed via Mongoose.
* **RESTful CRUD Operations:** Complete support for creating, reading, updating, and deleting tasks.
* **Environment Configuration:** Secure credential management using `dotenv`.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js (ES Modules)
* **Framework:** Express.js
* **Database:** MongoDB & Mongoose
* **Authentication:** JSON Web Tokens (`jsonwebtoken`), bcrypt (recommended for password hashing)

---

## 📂 Project Structure

```text
├── models/
│   ├── User.js        # User schema & model (username, password)
│   └── Task.js        # Task schema & model
├── routes/
│   ├── auth.js        # Authentication routes (/auth/register, /auth/login)
│   └── task.js        # Protected task CRUD routes (/tasks)
├── middleware/
│   └── auth.js        # JWT verification middleware
├── .env               # Environment variables (secret keys, DB URI)
├── server.js          # Entry point & Express server setup
└── package.json       # Project dependencies & scripts

```

---

## ⚙️ Getting Started & Installation

### 1. Clone or Set Up the Project

Make sure you have Node.js installed on your machine.

### 2. Install Dependencies

Run the following command in your terminal to install the necessary packages:

```bash
npm install express mongoose jsonwebtoken dotenv
npm install --save-dev nodemon

```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of your project and add your configuration details:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_jwt_key_here

```

### 4. Configure `package.json` Scripts

Ensure your `package.json` file includes the start and dev scripts:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

```

---

## 🏃‍♂️ Running the Server

Start your development server with hot-reloading using Nodemon:

```bash
npm run dev

```

You should see confirmation in your console:

```text
Connected to MongoDB successfully!
Server is running on port 5000

```

---

## 🧪 Testing with Postman

Since this is a backend-only project, you can test all endpoints using **Postman**.

### Step 1: Register a User

* **Method:** `POST`
* **URL:** `http://localhost:5000/auth/register`
* **Body (JSON):**
```json
{
  "username": "myusername",
  "password": "yourpassword123"
}

```



### Step 2: Log In to Get a JWT Token

* **Method:** `POST`
* **URL:** `http://localhost:5000/auth/login`
* **Body (JSON):**
```json
{
  "username": "myusername",
  "password": "yourpassword123"
}

```


* *Copy the returned `token` string from the response.*

### Step 3: Access Protected Task Routes

For any request to `/tasks` (Create, Read, Update, Delete):

1. Go to the **Authorization** tab in Postman.
2. Select **Bearer Token**.
3. Paste your JWT token into the **Token** field.

* **Create a Task (`POST /tasks`):**
```json
{
  "title": "Learn Postman Testing",
  "message": "Verify all API endpoints work successfully."
}

```


* **Get All Tasks (`GET /tasks`):** Returns all tasks belonging to the authenticated user.
* **Get Task by ID (`GET /tasks/:id`)**
* **Update Task (`PATCH /tasks/:id`)**
* **Delete Task (`DELETE /tasks/:id`)**
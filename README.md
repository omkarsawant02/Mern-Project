# Personal Expense Tracker

## Project Description
Personal Expense Tracker is a web application developed using the MERN stack. It helps users manage their income and expenses, calculate their total balance, and maintain transaction history.

## Features
- Add income transactions
- Add expense transactions
- View total balance
- View total income
- View total expenses
- View transaction history
- Categorize transactions
- Delete transactions
- Store transactions in MongoDB

## Technologies Used
- React.js
- Vite
- Node.js
- Express.js
- MongoDB
- Mongoose
- CSS

## Project Structure
```text
personal-expense-tracker/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites
- Node.js
- npm
- MongoDB Atlas account

### 1. Clone the Repository
```bash
cd personal-expense-tracker
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder and configure:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend:

```bash
node server.js
```

Backend URL:
http://localhost:5000

### 3. Frontend Setup
Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the localhost URL displayed by Vite.

## Environment Variables
The `.env.example` file provides configuration guidance.

Do not upload the actual `.env` file, database password, or credentials to GitHub.

## Author
Name: Omkar Sawant

Course: B.Sc. Information Technology

College: MVLU

Retail Sales Management System

A full-stack MERN-based dashboard built for the TruEstate SDE Intern Assignment, featuring fast search, multi-filtering, sorting, and pagination over large CSV datasets.

🚀 Live Demo
Frontend (Vercel)

🔗 https://tru-estate-iota.vercel.app/

Backend (Render)

🔗 https://truestate-2-k3u9.onrender.com/api/sales

🛠 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

Backend

Node.js

Express.js

CSV Parser

Hosted on Render

Data

CSV Dataset (1,000,000+ rows supported)

🔍 Search Features

Full-text search on:

Customer Name

Phone Number

Case-insensitive

Works with filters, sorting & pagination

Instant search response

🎯 Filter Features

Supports multiple combined filters:

Customer Region

Gender

Age Range

Product Category

Tags

Payment Method

Date Range

All filters work along with search, sort, & pagination.

↕ Sorting

Date (Newest → Oldest)

Quantity

Customer Name (A–Z)

Sorting persists while navigating or filtering.

📄 Pagination

10 items per page

Next / Previous controls

Fully synchronized with search, filters, and sorting

🖥️ Project Architecture

Detailed architecture available in:

📄 /docs/architecture.md

Includes:

Backend architecture

Frontend architecture

Data flow diagrams

Folder structure

Request–response cycle

Component logic

📦 Local Setup Instructions
Backend
cd backend
npm install
npm start


Runs at:

http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Runs at:

http://localhost:5173

🌐 Deployment
Frontend

Hosted on Vercel

Uses:

VITE_API_URL=https://truestate-2-k3u9.onrender.com

Backend

Hosted on Render

CSV-powered API endpoint:

https://truestate-2-k3u9.onrender.com/api/sales

📁 Folder Structure (Summary)
TruEstate/
│── backend/
│   ├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── sales.csv
│
│── frontend/
│   ├── src/
│   ├── components/
│   └── services/
│
└── docs/
    ├── architecture.md
    └── screenshots/

✔️ Status

Project successfully deployed and fully functional.
Ready for submission.

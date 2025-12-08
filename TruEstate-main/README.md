# Retail Sales Management System

A full-stack system built for TruEstate SDE Intern Assignment.  
It includes advanced search, filters, sorting, and pagination on a large dataset.

---

## 🔧 Tech Stack
**Frontend:** React (Vite), Axios  
**Backend:** Node.js, Express.js  
**Data:** CSV dataset (1,000,000 records)

---

## 🔍 Search
- Full-text search on:
  - Customer Name  
  - Phone Number  
- Case-insensitive  
- Works with filters and sorting  

---

## 🎯 Filters
Supports multi-filter combinations:
- Customer Region  
- Gender  
- Age Range  
- Product Category  
- Tags  
- Payment Method  
- Date Range  

---

## ↕ Sorting
- Date (Newest First)  
- Quantity  
- Customer Name (A–Z)  

Sorting persists along with filters and pagination.

---

## 📄 Pagination
- 10 items per page  
- Next / Prev  
- Works with all filters  

---

## 🚀 Setup Instructions

### Backend:
cd backend
npm install
npm start


### Frontend:
cd frontend
npm install
npm run dev


---

## 📁 Architecture Document
See `/docs/architecture.md` for:
- Backend architecture  
- Frontend architecture  
- Data flow diagrams  
- Folder structure  
- Module responsibilities  

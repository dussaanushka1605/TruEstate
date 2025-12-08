# Architecture Overview

## 1. Backend Architecture
### Tech
- Node.js, Express.js
- CSV parsed into memory at startup
- Filtering, Searching, Sorting & Pagination handled in service layer

### Flow
Client → Controller → Service → Filter/Sort Logic → Response

### Folders
- controllers: Request handling  
- services: Filtering, search, sorting logic  
- routes: API routes  
- utils: CSV loader  
- models: (not required)  

---

## 2. Frontend Architecture
### Tech
- React (Vite)
- Axios for API calls

### Flow
UI → State Change → API Call → Render Table

### Folders
- components: UI elements  
- services: API communication  
- styles: CSS  
- pages: (optional)  

---

## 3. Data Flow
1. User interacts (search/filter/sort)
2. Frontend sends query params to backend  
3. Backend processes dataset with:
   - Search  
   - Filters  
   - Sorting  
   - Pagination  
4. Backend returns paginated results  
5. UI updates table  

---

## 4. Module Responsibilities
- SearchBar: full-text search  
- FilterPanel: multi-filters  
- SortDropdown: sorting  
- SalesTable: results display  
- Pagination: page navigation  
- api.js: backend integration  

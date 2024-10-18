# EMC Software Test Project

This project is part of the **EMC Corporation** software test. It demonstrates full-stack web development using **C# .NET** or other web technologies, along with **MySQL** as the database.

## Project Overview
- **Runtime:** Bun.sh (I dont want using node and npm)
- **Database:** MySQL (`db.sql`)
- **Frontend:** Vite + React  
- **Backend:** Node.js + Express or **C# .NET** (alternative backend)  
- **Assignment Instructions:** Provided in the `BaiTestPhanMem.xls` file  

### Assignment Summary

1. **Database Setup:**  
   - Create a database using the provided schema (you can use **SQL Server** or another SQL-based database; this project uses **MySQL**).  
   - Import data from the given dataset into the database, ensuring data integrity.

2. **Application Development Requirements:**  
   - Build a **web application** using **C# .NET** or any suitable web technology.  
   - Implement the following functionalities:

     a. **Display Data:**  
        - Show a list of data in a **grid view** on the web interface.  

     b. **CRUD Operations:**  
        - Add, edit, and delete records from the database.  

     c. **Search Functionality:**  
        - Search records by **SoCMT** and **HangGPLX** fields.  

---

## How to Run the Project

### 1. Database Setup

1. Install MySQL or another SQL database system.  
2. Import the `db.sql` file into your database:
   ```bash
   mysql -u root -p < db.sql
   ```
3. Update the connection string in the backend code to connect to your MySQL instance.
### 2. Backend Setup (Node.js + Express)

1. Install Node.js and dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Configure the database connection string in the backend code.
3. Start the backend server:
   ``` bash
   npm start
   ```
### 3. Frontend Setup (Vite + React)
1. Navigate to the frontend directory
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
## File Structure
   1. db.sql: MySQL schema and initial data
   2. frontend/: Vite + React project files
   3. backend/: Node.js + Express backend code 
BaiTestPhanMem.xls: Contains detailed assignment instructions
## Requirements
   1. MySQL and MySQL Workbench
   2.Node.js + Expressfor backend logic
   3. Vite + React for frontend
# POS System

## 📌 Overview
This is a modular **Point of Sale (POS) system** for restaurants and cafes, built using **Next.js** for the frontend and **Express.js** for the backend. The system allows waiters to log in using a PIN, manage tables, and process orders in real time.

## 🏗️ Tech Stack
- **Frontend:** Next.js (React, TailwindCSS)
- **Backend:** Express.js (Node.js, MongoDB)
- **Database:** MongoDB
- **Authentication:** PIN-based login for waiters
- **Deployment:** Vercel (Frontend) & Railway/Render/Heroku (Backend)

## 📂 Project Structure
```
/pos-system
  ├── /frontend  (Next.js - UI and table management)
  ├── /backend   (Express.js - API and database handling)
  ├── package.json
  ├── .gitignore
  ├── README.md
```

## 🚀 Getting Started
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/pos-system.git
cd pos-system
```

### 2️⃣ Install dependencies
```sh
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the **backend** folder and add:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4️⃣ Run the application
```sh
# Start Backend
cd backend
npm start

# Start Frontend
cd ../frontend
npm run dev
```

The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## 🎯 Features
✅ Waiter login with PIN
✅ Interactive table layout with real-time updates
✅ Order management system
✅ Table status updates (free, occupied, reserved)
✅ Admin panel for managing tables and orders

## 🔧 API Endpoints
### **User Authentication**
- `POST /api/users/login` → Authenticate waiter with PIN

### **Table Management**
- `GET /api/tables` → Fetch all tables
- `POST /api/tables` → Add a new table
- `PUT /api/tables/:id` → Update table status

### **Orders**
- `GET /api/orders` → Fetch active orders
- `POST /api/orders` → Create a new order
- `PUT /api/orders/:id` → Update order status

## 🛠️ Deployment
### Deploy Frontend to Vercel
```sh
cd frontend
vercel
```

### Deploy Backend to Railway
```sh
cd backend
git push origin main
```

## 🤝 Contributing
Feel free to contribute! Fork the repo, make changes, and submit a pull request.

## 📜 License
MIT License - Free for personal and commercial use.

---
🔥 **Now you’re ready to build your POS system!** 🚀


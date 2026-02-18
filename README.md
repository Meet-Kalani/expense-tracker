# 💰 Expense Tracker (MVP)

A simple Expense Tracker application built with **React, TypeScript, and Redux Toolkit** to manage income and expense transactions with persistent storage.

---

## 📌 Project Goal

Build a minimal yet scalable financial tracking app that demonstrates:

- Strong TypeScript modeling
- Proper Redux Toolkit architecture
- Derived state using selectors
- Clean separation of concerns
- Local storage persistence

---

## 🚀 Features (MVP Scope)

### 🧾 Transaction Management

- Add new transaction (income / expense)
- Delete transaction
- View all transactions
- Sort transactions by newest first

Each transaction includes:

- Amount
- Type (income / expense)
- Category
- Date
- Optional note
- Created timestamp

---

### 📊 Summary Section

Automatically calculates:

- Total Income
- Total Expense
- Net Balance (Income − Expense)

Summary values are derived from the store (not stored separately).

---

### 💾 Persistence

- Transactions are saved to localStorage
- Store hydrates from localStorage on app load

---

### 🔄 Async Simulation

- Simulated async behavior for adding transactions
- Loading state handling
- Error state handling
- Disabled submit button while loading

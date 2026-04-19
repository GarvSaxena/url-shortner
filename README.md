# 🔗 URL Shortener

A simple URL Shortener web application built using **Node.js, Express, MongoDB, and EJS**.
It allows users to shorten long URLs and track visit history.

---

## 🚀 Features

* 🔗 Generate short URLs
* 📊 Track number of clicks
* 🌐 Redirect to original URL
* 📄 View all shortened URLs in a table
* ⚡ Fast and simple UI using EJS

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Templating Engine:** EJS
* **Other:** Mongoose, NanoID

---

## 📁 Project Structure

```
URL_shortner/
│
├── controllers/
├── models/
├── routes/
├── views/
├── connections/
├── index.js
├── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```bash
mongodb://localhost:27017/short-url
```

---

### 4️⃣ Run the server

```bash
node index.js
```

---

### 5️⃣ Open in browser

```
http://localhost:5001/
```

---

## 📌 API Routes

| Method | Route                     | Description              |
| ------ | ------------------------- | ------------------------ |
| POST   | `/url`                    | Create short URL         |
| GET    | `/url/:shortId`           | Redirect to original URL |
| GET    | `/url/analytics/:shortId` | Get analytics            |

---

## 📸 How It Works

1. Enter a long URL
2. Click **Generate**
3. Get a short URL
4. Click short URL → redirected
5. Visit count increases

---

## 🧠 Learning Outcomes

* Express routing & middleware
* MongoDB with Mongoose
* MVC structure
* Server-side rendering with EJS
* REST API design

---

## 🔮 Future Improvements

* 🔘 Copy to clipboard button
* 📊 Advanced analytics (graphs)
* 🔐 User authentication
* 🌍 Deploy to cloud (Render / Vercel / AWS)
* ⚛️ React frontend

---

## 🤝 Contributing

Feel free to fork this repo and improve it!

---


## 👨‍💻 Author

**Garv Saxena**

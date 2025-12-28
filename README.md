# 📚 Book Finder

Book Finder is a simple React application built using **Vite + React**.  
It allows users to search for books, add them to a favourites list, and remove them from favourites.

This project was developed as part of a **tutorial** to practice component-based design, state management, and reusable components in React.

---

## 🚀 Features

- 🔍 Search books by title
- 📖 Display a list of books loaded from a JSON file
- ❤️ Add books to a favourites list
- ❌ Remove books from favourites
- ♻️ Reusable `List` component for rendering collections
- 📱 Responsive and clean UI layout

---

## 🛠️ Technologies Used

- React (with Hooks)
- Vite
- JavaScript (ES6+)
- CSS

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   ├─ Books.jsx
 │   ├─ FavouriteBooks.jsx
 │   ├─ List.jsx
 │   ├─ SearchBox.jsx
 ├─ App.jsx
 ├─ main.jsx
 ├─ index.css
 ├─ App.css
public/
 ├─ books.json
 ├─ book.svg
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173/our-app/
```

---

## 🌍 Deployment

This project is deployed using **GitHub Pages**.

To deploy updates:

```bash
npm run build
npm run deploy
```

Make sure the `base` option in `vite.config.js` matches your GitHub repository name.

---

## 🧠 Learning Outcomes

- Understanding React state lifting and prop passing
- Creating reusable components
- Handling conditional rendering
- Managing lists and user interactions
- Deploying a Vite + React app to GitHub Pages

---

## 📌 Notes

- This project is intended for **learning and tutorial purposes**
- Styling is intentionally kept simple and readable

---

## 👤 Author

**Rushan Harusha Weerakkody**

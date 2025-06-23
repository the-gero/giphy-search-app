# Giphy Search Web Application

A responsive GIF browsing web app using the Giphy API. Built with **React**, **Redux Toolkit**, **TypeScript**, and **TailwindCSS**, it supports searching, trending GIFs, and dynamic pagination.

---

## ✨ Features

* 🔥 Trending GIFs on initial load
* 🔍 Search functionality with live query updates
* ➕ Load More button to paginate results
* 🚀 Optimized performance with Redux Toolkit & caching
* 🖼️ Pinterest-style column layout using TailwindCSS

---

## 🧑‍💻 Tech Stack

* React + TypeScript
* Redux Toolkit + RTK Query
* TailwindCSS
* Giphy API
* Vite + pnpm + SWC

---

## 📦 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/the-gero/giphy-search-app.git
cd giphy-search-app
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Add Environment Variable

Create a `.env` file with your Giphy API key:

```
VITE_GIPHY_API_KEY=your_api_key_here
```

### 4. Start Development Server

```bash
pnpm dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure

```
src/
├── app/
│   └── store.ts              # Redux store setup
├── features/
│   └── gifs/
│       ├── gifsSlice.ts      # Redux logic (RTK)
│       ├── gifsAPI.ts        # API abstraction
│       └── GifsGrid.tsx      # Component to show GIFs
├── components/
│   ├── SearchBar.tsx
│   └── LoadMoreButton.tsx
├── pages/
│   └── Home.tsx
├── App.tsx
├── index.tsx
```

---

## 💪 Future Improvements

* Infinite scrolling support
* Creator metadata on hover
* Theme toggle (light/dark)
* Shareable GIF links or embed codes

---

## 🙌 Acknowledgements

* [Giphy API](https://developers.giphy.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/)

---

## 📝 License

MIT © 2025 [Abhishek Tiwari](https://github.com/the-gero)

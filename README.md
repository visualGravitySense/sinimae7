# 🏡 Housing Association Website  

A modern and optimized web application for a **housing association** built with **React (Vite)** and **Firebase Authentication**. This project aims to provide residents with easy access to information, announcements, and online services.  

## 🚀 Features  
- **Authentication with Firebase** (Google Sign-In)  
- **Dark/Light Theme Toggle** (Styled-Components)  
- **State Management with Zustand**  
- **React Query for Data Fetching**  
- **Routing with React Router**  
- **Progressive Web App (PWA) support**  
- **Optimized Performance with Vite**  

## 🔧 Tech Stack  
- **Frontend:** React (Vite), TypeScript, Styled-Components  
- **State Management:** Zustand  
- **Authentication:** Firebase Auth (Google Sign-In)  
- **Data Fetching:** React Query  
- **Routing:** React Router  
- **Deployment:** Vercel / Firebase Hosting  

## 📌 Installation & Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/sinimae7.git
   cd sinimae7
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Create a `.env` file and add your **Firebase configuration**:  
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```
4. Start the development server:  
   ```bash
   npm run dev
   ```

## 🔑 Authentication  
The app uses **Google Sign-In via Firebase Authentication**.  
Users can log in without manual registration – Firebase automatically creates their account.  

## 📂 Project Structure  
```
/src
  /components  # Reusable UI components
  /pages       # Main pages (Home, Dashboard, etc.)
  /store       # Zustand state management
  /styles      # Global styles and themes
  firebase.ts  # Firebase configuration
  main.tsx     # Root entry point
```

## 📅 Next Steps  
- 🔹 Add Firestore database for storing user data  
- 🔹 Implement role-based access (resident/admin)  
- 🔹 Create a dashboard for announcements and documents  

## 🎉 Contributing  
Feel free to fork the repo, submit PRs, or suggest improvements! 🚀  



---


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

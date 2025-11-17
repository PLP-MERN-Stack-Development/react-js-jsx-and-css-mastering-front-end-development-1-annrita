# PLP Task Manager — Frontend (Vite + React + Tailwind)

A responsive and interactive Task Manager application built with Vite, React, and Tailwind CSS.
The project demonstrates clean component architecture, React hooks, state management, pagination, search functionality, and API integration.


## 📌 Tech Stack


### ✨ Features

🌗 Dark & Light Mode (with custom toggle)

🔍 Client-side search

📄 Pagination

⚡ Fast Vite development environment

🎨 Tailwind CSS styling with dynamic themes

📦 Reusable components

🔗 API integration using jsonplaceholder

📱 Responsive UI (mobile → desktop)



### 🖼️ Screenshots

```
[Home Page](images/HomePage.png)
[Posts Page](images/PostsPage.png)

```

## 📁 Project Structure

```

frontend/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── NavBar.jsx
│   │   └── TaskManager.jsx
│   │
│   ├── pages/
│   │   └── Posts.jsx
│   │
│   ├── lib/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
└── vite.config.js

```


## 📡 API Integration

The app fetches data from:

    https://jsonplaceholder.typicode.com/posts


The fetch logic is located in:

    src/lib/api.js


Features implemented:

- Loading state

- Error handling

- Pagination

- Search filtering

- Clean UI presentation



## 🚀 Installation & Setup

1. Clone the repository

    git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-1-annrita.git

2. Move into the project

    cd frontend

3. Install dependencies

    npm install
	npm install prop-types

4. Start the development server

    npm run dev

5. Open your browser

    👉 http://localhost:5173/



## 🌐 Live Demo

Deployed at Netflify

    🔗 Live Demo: https://rita-week-3-tasks-assignment.netlify.app/



## 🙌 Author

AnnRita Mukami Gitonga

```
💼 Software Engineer | Frontend Developer | Telecommunications & IT Graduate
📧 Email: annritamukami23@gmail.com
🐙 GitHub: https://github.com/1-annrita

```





### GUIDE: CREATING THE PROJECT FROM SCRATCH



🔵 STEP 1 — Create a New React application Using Vite


Open Git Bash inside the folder where you want the project.

	A. Run:

		npm create vite@latest frontend -- -- template react


	B. Then go inside the project:

		cd frontend


	C. Install dependencies:

		npm install
		npm install prop-types

		
		
🔵 STEP 2 — Install & Configure Tailwind CSS


Inside the same folder (frontend)

	A. Run:
	
		npm install tailwindcss @tailwindcss/vite

	B. Replace everything in src/index.css with the following:

		@import "tailwindcss";
		
		
	C. In src folder, Delete App.css, we do not need it.
	
	
	D. At the root of the project, create our own:
		
		jsconfig.json file 
		
	E. Update vite.config.js

		Add the following code to the vite.config.js so your app can resolve paths without error:

			i)npm install -D @types/node

			ii) vite.config.js
			
			import path from "path"
			import tailwindcss from "@tailwindcss/vite"
			import react from "@vitejs/plugin-react"
			import { defineConfig } from "vite"
			
			// https://vite.dev/config/
			export default defineConfig({
			plugins: [react(), tailwindcss()],
			resolve: {
				alias: {
				"@": path.resolve(__dirname, "./src"),
				},
			},
			})
			
			
			
🔵 STEP 3 — Project Structure Setup	

        
    A. Project Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── NavBar.jsx
│   │   └── TaskManager.jsx
│   │
│   ├── pages/
│   │   └── Posts.jsx
│   │
│   ├── lib/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
└── vite.config.js

```

<b> ⚙️ Quick Taber (Backend)</b>

The Quick Taber backend provides REST APIs for handling user authentication and shortcut management.



✨ Features

* 🔐 Authentication (JWT-based login/signup)
* 📁 User-specific shortcut storage
* ➕ Add shortcuts
* ✏️ Edit shortcuts
* 🗑️ Delete shortcuts
* 🌍 Explore shortcuts (admin-controlled)

---

 🧠 Functionality

* Each user's data is stored separately
* After login, users can access their personal shortcuts
* Users can add shortcuts from the Explore page to their dashboard

---

 🛠️ Tech Stack

* Node.js
* Express.js
* Database: MongoDB
* Authentication: JWT

---

 📦 API Endpoints

 Auth

* POST /signup
* POST /login

Shortcuts

* GET /shortcuts
* POST /shortcuts
* PUT /shortcuts/:id
* DELETE /shortcuts/:id

 Explore

* GET /explore

---

 📦 Installation

```bash
git clone YOUR_BACKEND_REPO_LINK
cd backend
npm install
npm start
```

---

 🌐 Deployment

🔗 Live API:
👉  BACKEND_DEPLOYMENT_LINK  :  https://github.com/Aneespatel620/Quicktaber_backend.git 

     Fronted Link : https://quicktaberfronted33-git-main-patel-anees-projects.vercel.app/ 
     

⚠️ Note

⚠️ Due to free hosting limitations:

* Server may sleep when inactive
* Initial response can be slow
* Occasional downtime or expiration may occur

---

🔐 Environment Variables

```env
PORT=
MONGO_URI=
JWT_SECRET=
```

 👨‍💻 Author

<b> Patel Anees Ahmed Sayeed Kha </b>


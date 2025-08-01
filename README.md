# 📊 RepoRadar

**RepoRadar** is a GitHub repository analyzer that lets users enter any public GitHub repository URL and instantly view important insights such as pull requests, merge status, total contributions, and owner profile details.

🔗 **Live Site:** [https://reporadar-eta.vercel.app](https://reporadar-eta.vercel.app)

---

## 🚀 Features

- 🌐 Enter any GitHub repo URL to fetch details
- 👤 Displays repo owner’s profile picture and username
- 📊 Shows:
  - Total Pull Requests
  - Open Pull Requests
  - Closed Pull Requests
  - Merged Pull Requests
  - Total Contributions
- 🌙 Supports both Light and Dark mode (toggle switch)
- ⚠️ Error handling for invalid or inaccessible URLs

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **API:** GitHub REST API v3

---

RepoRadar/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/              # SVG icons and static assets
│   │   └── Icon.svg
│   ├── components/          # Reusable components (Navbar, Statistics, Error, NoData, etc.)
│   ├── services/            # API calls for repo, user, and pull request data
│   ├── App.jsx              # Main app structure
│   ├── index.css            # Tailwind + global styles
│   └── main.jsx             # React entry point
│
├── .gitignore
├── package.json
└── README.md


## 📦 Installation

```bash
git clone https://github.com/ig-ayush/RepoRadar.git
cd RepoRadar
npm install
npm run dev

# Roamly - Travel Booking Platform

Roamly is a full stack travel booking web application where users can explore destinations, manage travel packages, and book trips seamlessly. It features Google OAuth, JWT secured routes, dynamic destination pages, and full CRUD functionality for travel packages.

**Live Demo:** [roamly-lake.vercel.app](https://roamly-lake.vercel.app/)
**Repository:** [github.com/nahin113/roamly](https://github.com/nahin113/roamly)

---

## 📸 Screenshot

![Roamly Home Page](./screenshot.png)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router |
| **MongoDB** | NoSQL database |
| **Better Auth** | Authentication library |
| **JWT** | Secure route protection |
| **HeroUI** | UI component library |
| **Tailwind CSS** | Utility-first styling |
| **Google OAuth** | Social authentication |

---

## Key Features

•  **Authentication** - Email/password signup & login + Google OAuth via Better Auth with JWT-secured routes
•  **Destination Management** - Browse, add, edit, and delete travel packages with dynamic detail pages
•  **Booking System** - Book destinations and cancel bookings with real time database updates
•  **User Profile** - Edit profile with conditional navbar UI based on authentication state

---

## Dependencies

| Package | Purpose |
|---|---|
| next | React framework with App Router |
| react / `react-dom` | Core UI library |
| better-auth | Authentication with Google OAuth |
| mongoose | MongoDB object modeling |
| @heroui/react | UI component library |
| tailwindcss | Utility-first CSS styling |
| jsonwebtoken | JWT route protection |
```

> **Note:** Check `package.json` for the exact versions used in this project.

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB URI (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Google OAuth credentials (from [Google Cloud Console](https://console.cloud.google.com))

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/nahin113/roamly.git
cd roamly
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**4. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👨‍💻 Author

**Nahin Ahmed**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nahin-ahmed-bd/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/nahin113)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=flat&logo=vercel&logoColor=white)](https://nahinahmed.vercel.app)


## License
This project is open source and available under the [MIT License](./LICENSE).

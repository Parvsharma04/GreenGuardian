# 🌿 Green Guardian



Green Guardian is a tech-driven initiative to enhance sanitation and hygiene in India by incentivizing proper waste disposal, tracking garbage collection, and allowing users to report environmental hazards.
## 🚀 Features

- ♻️ **Recycling Rewards** – Earn redeemable tokens for proper waste disposal.
- 🗺️ **Garbage Tracking** – Monitor collection teams and nearby dump sites.
- 📜 **Health Hazard Reporting** – Report sanitation issues in your locality.
- 🕵️ **Sanitation Team Audits** – Ensure teams perform their duties via investigations.
- ⚖️ **Pollution Grievances** – File complaints against individuals or organizations.

## 🏗️ Tech Stack

- **Frontend:** Next.js, TailwindCSS, React
- **Backend:** Node.js, Express.js, Prisma
- **Database:** PostgreSQL / MongoDB
- **Authentication:** JWT-based authentication
- **Payments:** Razorpay for transactions
- **Hosting:** Vercel (Frontend), AWS / DigitalOcean (Backend)

## 🔧 Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [PostgreSQL](https://www.postgresql.org/) / [MongoDB](https://www.mongodb.com/)

### Clone the Repository

```sh
 git clone https://github.com/yourusername/green-guardian.git
 cd green-guardian
```

### Setup Environment Variables

Create a `.env.local` file and configure the following:

```ini
NEXT_PUBLIC_API_URL=http://localhost:5000
DATABASE_URL=your-database-url
JWT_SECRET=your-secret-key
RAZORPAY_KEY=your-razorpay-key
```

### Install Dependencies

```sh
npm install
```

### Run the Development Server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Deployment

### Deploy on Vercel

```sh
vercel
```

### Deploy Backend to AWS / DigitalOcean

1. Configure an EC2/Droplet instance
2. Install Node.js & PostgreSQL/MongoDB
3. Clone the repo and install dependencies
4. Use PM2 for process management:

```sh
pm install -g pm2
pm start
pm2 start server.js --name green-guardian
```

## 📜 API Endpoints

| Method | Endpoint        | Description                  |
| ------ | --------------- | ---------------------------- |
| GET    | `/api/reports`  | Fetch all reported issues    |
| POST   | `/api/reports`  | Submit a new report          |
| GET    | `/api/rewards`  | View earned recycling points |
| POST   | `/api/checkout` | Process a payment            |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`feature-xyz`)
3. Commit your changes (`git commit -m 'Add feature xyz'`)
4. Push the branch (`git push origin feature-xyz`)
5. Submit a Pull Request

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

🌟 **Join us in making a cleaner, greener India!** 🌿


# FolioPort – Modern Developer Portfolio

An elite, high-performance portfolio system architected with **React 19**, **Vite**, and **Tailwind CSS**. Designed for developers who want to showcase their technical prowess through immersive motion design and clean systems architecture.

![Portfolio Preview](public/vite.svg)

## 🚀 Key Features

- **Hyper-Smooth Motion:** Powered by `framer-motion` for complex staggered animations and 3D interactive elements.
- **Modern Tech Stack:** Built with the latest React 19 patterns and Vite for lightning-fast HMR.
- **High-End UI/UX:** A dark-themed, glassmorphic design language with bespoke typography (`Inter` & `Cal Sans`).
- **Responsive Architecture:** Fully optimized for all device clusters, from ultra-wide monitors to mobile devices.
- **Production Ready:** Optimized build pipeline with PostCSS and Autoprefixer.

## 🛠 Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Tailwind CSS, PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** Fontsource (Inter, Cal Sans)
- **Routing:** React Router 7

## 📦 Local Development

To spin up a local development environment:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd folioport
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deployment to Vercel (Recommended)

This project is optimized for **Vercel**. Deploying is simple:

1. **Push your code** to a GitHub/GitLab/Bitbucket repository.
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New"** > **"Project"**.
4. Import your repository.
5. Vercel will automatically detect the **Vite** framework.
6. Click **"Deploy"**.

**Note:** The `vercel.json` file is already included to handle SPA routing, ensuring that page refreshes on sub-routes work perfectly.

## 📄 License

This project is licensed under the MIT License.

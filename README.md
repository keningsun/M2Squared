# M2Squared

M2Squared is a modern web application focused on on-chain liquidity and cross-border payments.

## Project Info

- **Production URL**: https://p-862293.vercel.app/
- **Repository**: _please fill in your repo URL if public_

## Features

- ⚡️ Built with Vite + React + TypeScript
- 🎨 UI powered by shadcn-ui and Tailwind CSS
- 📱 Responsive and modern design
- 🔗 SEO and social sharing optimized (Open Graph & Twitter Card)
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm

### Installation

```sh
git clone <YOUR_GIT_URL>
cd M2Squared
npm install
```

### Development

```sh
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app locally.

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Deployment

This project is optimized for [Vercel](https://vercel.com/):

1. Push your code to GitHub/GitLab/Bitbucket.
2. Import your repo into Vercel.
3. Set the root directory if needed (default is project root).
4. Deploy!

**Static assets** in the `public` folder (such as `/m2_preview.png`) will be served at the root of your deployed domain.

### SEO & Social Preview Image

- The Open Graph and Twitter Card meta tags are set up in both `index.html` and `src/index.html`.
- The preview image is located at:  
  `public/m2_preview.png`
- After deployment, the image will be accessible at:  
  `https://p-862293.vercel.app/m2_preview.png`  
  _(or your custom domain, e.g. `https://yourdomain.com/m2_preview.png` if configured)_

**Note:**  
Social platforms (WeChat, Twitter, Facebook, etc.) require a public, absolute URL for preview images.  
If you change the image, just replace `public/m2_preview.png` and redeploy.

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Custom Domain

To use a custom domain with Vercel:

1. Go to your Vercel dashboard.
2. Select your project.
3. Navigate to **Settings > Domains**.
4. Add your domain and follow the verification steps.

## Static Assets

All files in the `public` directory are served at the root of your deployed site.  
For example, `public/m2_preview.png` → `https://yourdomain.com/m2_preview.png`

## License

_Include your license here if open source._

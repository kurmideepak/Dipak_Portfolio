# Dipak Kurmi — Portfolio

This repo is a React + Vite portfolio template built with Tailwind CSS and Framer Motion.

Features
- React 18 + React Router
- Tailwind CSS (custom palette)
- Dark/light mode with localStorage
- Framer Motion animations
- Responsive layouts for mobile/tablet/desktop
- Contact form (EmailJS placeholder)
- Lazy loading pages, optimized images (lazy) and accessible markup

Quick start

1. Install dependencies

```powershell
npm install
```

2. Run development server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
npm run preview
```

Notes & next steps
 - Configure EmailJS to enable the contact form:
	 1. Create an account at https://www.emailjs.com/ and add an email service.
	 2. Create an email template (fields: name, email, message).
	 3. Copy your Service ID, Template ID and Public Key (sometimes called User ID or Public Key).
	 4. Create a `.env` file at the project root (copy `.env.example`) and set the values:

```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

	 5. Restart the dev server. The form will read keys from `import.meta.env` and send emails.

Deployment
- This project is ready for Vercel or Netlify. On Vercel select the repo and the build command is `npm run build`. The publish directory is `dist`.

Author
- Dipak Kurmi — Software Developer | Android & Full Stack Developer

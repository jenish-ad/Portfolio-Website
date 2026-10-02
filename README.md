# Jenish Adhikari — Portfolio

My personal portfolio: who I am, what I'm building, and how to reach me.

Built with Next.js, React and Tailwind CSS, with Motion for the small animations and Resend for the contact form.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

The contact form sends email through [Resend](https://resend.com). To use it locally, add your key to `.env.local`:

```
RESEND_API_KEY=your_key_here
```

Everything else works without it.

## Structure

- `app/` – layout, page and the `/api/contact` route
- `components/` – one file per section (Hero, About, Projects, Contact) plus the navbar
- `public/` – resume, project screenshots and the hero GIF

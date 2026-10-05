# Jenish Adhikari - Portfolio

My personal site: what I've built, where I've worked, and how to reach me.

**Live: [jenishadhikari.com.np](https://jenishadhikari.com.np)**

Next.js + React + Tailwind CSS, with Motion for a few small animations and Resend for the contact form.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

The contact form needs a Resend key in `.env.local`:

```
RESEND_API_KEY=your_key_here
```

Everything else works without it.

If you deploy your own copy, also set `NEXT_PUBLIC_SITE_URL` to your domain. Metadata, structured data, the sitemap and robots.txt use it, and it falls back to `https://jenishadhikari.com.np`.

## Where things are

- `app/` - layout, page, SEO bits (icon, OG image, sitemap, robots) and the `/api/contact` route
- `components/` - one file per section (Hero, Experience, Projects, Contact) plus the navbar and pop-ups
- `lib/site.js` - name, email, socials and description, used across the site
- `public/` - resume, certificate, project screenshots and the hello GIF

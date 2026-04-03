# f-bit software

Portfolio website for [f-bit software](https://f-bit.software) — built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS 4.

A single-page scrolling experience showcasing who I am, what I've built, what I do, how I work, and how to get in touch.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript 5
- **Tailwind CSS 4**
- **@react-spring/web** for animations
- **Nodemailer** for the contact form

## Getting Started

```bash
npm install
npm run dev
```

The contact form requires SMTP credentials via environment variables:

```bash
SMTP_HOST=<hostname> SMTP_PORT=<port> SMTP_USER=<username> SMTP_PASS=<password>
```

## Production

```bash
docker build -t fbit-software .
docker compose -f docker-compose.prod.yml up -d
```

## License

[MIT](LICENSE)

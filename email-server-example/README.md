Node.js Express + Nodemailer example

1) Create a directory for your server (e.g. server/) and add this file as `index.js`.

2) Install dependencies:

```bash
npm init -y
npm install express nodemailer dotenv
```

3) Create a `.env` with SMTP settings:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your@smtp.user
SMTP_PASS=yourpassword
FROM_EMAIL=you@example.com
TO_EMAIL=avrumy@fivestarcorr.com
```

4) Example `index.js`:

```js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { to, subject, formData } = req.body;

  const html = `
    <h2>Quote Request</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Company:</strong> ${formData.company}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Product Type:</strong> ${formData.productType}</p>
    <p><strong>Industry:</strong> ${formData.industry}</p>
    <p><strong>Volume:</strong> ${formData.volume}</p>
    <p><strong>Message:</strong><br/>${formData.message.replace(/\n/g, '<br/>')}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL || to,
      subject,
      html,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log('Email server running on', port));
```

5) Run:

```bash
node index.js
```

6) Deploy this behind your frontend (Netlify functions, Vercel serverless, small Express app). Update your frontend to POST to the correct URL (e.g. https://your-server.com/api/send-email).
import { Resend } from 'resend';
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);

const result = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'trevorbrown.web@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});

console.log('Email sent successfully!', result);
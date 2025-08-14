import { Resend } from 'resend';

const resend = new Resend('re_9xATisdV_LFxKy6ToogjvUA13kwstaPGw');

const result = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'trevorbrown.web@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});

console.log('Email sent successfully!', result);
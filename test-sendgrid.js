// Test SendGrid integration
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'tbrown034@gmail.com', // Your receiving email
  from: 'tbrown034@gmail.com', // Your verified sender
  subject: 'SendGrid Test Email',
  text: 'This is a test email from SendGrid',
  html: '<strong>This is a test email from SendGrid</strong>',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent successfully!');
  })
  .catch((error) => {
    console.error('Error:', error);
    if (error.response) {
      console.error('Error details:', error.response.body);
    }
  });
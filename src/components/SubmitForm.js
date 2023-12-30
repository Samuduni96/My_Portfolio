const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    const { firstName, lastName, email, phone, message } = data;

    const msg = {
      to: 'hkas.wijerathna@gmail.com', 
      from: 'sender@example.com', 
      subject: 'New Contact Form Submission',
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ code: 500, message: 'Internal Server Error' }),
    };
  }
};

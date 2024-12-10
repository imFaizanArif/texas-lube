import nodemailer from "nodemailer";

export async function  POST(req ) {
  console.log('resqeur', req);
  
  const data = await req.json(); // Parse the body content
  const { name, email, subject, message } = data;
/*
SEND_EMAIL_USER=salmantest3321@gmail.com
SEND_EMAIL_PASS=ifuj pjqx tlkc sunq
RECEV_EMAIL_USER=esautomation@ESLabsTest1.onmicrosoft.com
*/
    // Set up the transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // e.g., Gmail (or another SMTP service)
      auth: {
        user: "salmantest3321@gmail.com", // Replace with your email
        pass: "ifuj pjqx tlkc sunq", // Replace with your email password or app password
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: "mahmoodraj75@gmail.com",  
        subject: `Contact Form Submission: ${subject}`,
        text: `
          You have a new contact form submission from:
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      });

      return  new Response(JSON.stringify({ message: `Email sent from ${email} successfully!` }), { status: 200 })

    } catch (error) {
      console.error("Error sending email:", error);
      return  new Response(JSON.stringify({ error: "Error sending email." }), { status: 500 })
    }
  
}

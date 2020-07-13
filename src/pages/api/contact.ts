import { createTransport } from 'nodemailer';

import { config } from '@@/config';
import { ContactMessage } from '@@/lib/types';

export default async (req, res) => {
  if (req.method === 'POST') {
    const message: ContactMessage = {
      name: req.body.name || '',
      company: req.body.company || '',
      mail: req.body.mail || '',
      message: req.body.message || '',
    };

    const transporter = createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: true,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: '"Kontaktformular" <automation@f-bit.software>',
        to: 'fred@f-bit.software',
        subject: `[Kontaktformular] Nachricht von ${message.name}`,
        text: `
        Es wurde eine Nachricht über das Kontaktformular von f-bit.software gesendet.\n\n
        Firma: ${message.company}\n
        Name: ${message.name}\n
        Nachricht:\n
        ${message.message}`,
        html: `
        Es wurde eine Nachricht über das Kontaktformular von f-bit.software gesendet.<br><br>
        <b>Firma:</b> ${message.company}<br>
        <b>Name:</b> ${message.name}<br>
        <b>Nachricht:</b><br>
        ${message.message.replace(/\n/g, '<br>')}`,
      });

      console.log(`Contact message sent: ${info.messageId as string}`);

      res.statusCode = 201;
      res.json({ message: 'Nachricht gesendet.' });
    } catch (ex) {
      console.error('Error:', ex);
      console.error('Nachricht:', message);

      res.statusCode = 500;
      res.json({
        message:
          'Senden der Nachricht fehlgeschlagen. Bitte versuchen Sie es auf einem anderen Weg.',
      });
    }
  } else {
    res.statusCode = 404;
  }
};

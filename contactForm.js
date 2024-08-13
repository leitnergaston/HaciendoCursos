import { Resend } from 'resend';

const resend = new Resend('re_QFJFz79o_7NGsR8Xo8VzDt2quFKVfkYco');

resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'leitnergaston@gmail.com',
    subject: 'Nuevo mensaje desde Protfolio',
    html: '<p>Mensaje enviado</p>'
});
// https://ethereal.email/
module.exports = {
    service: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        user: 'vaughn.stroman28@ethereal.email',
        password: 'EUNvXBsus7WwdpNEE6'
    },
    registerVerification: {
        from: 'Exercise <noreply@exercise.com>',
        subject: 'Email Confirmation',
        htmlBodyTemplate:
            `<div>
                <h1 style="text-align: center;">
                    <strong>Welcome to <span style="color: #fc987e;">GoGym!</span></strong>
                </h1>
                <p>
                    <span>Valid until <%EXPIRATION_DATE%></span>
                </p>
                <div>
                    <a href="<%CONFIRM_LINK%>">Click para confirmar</a>
                <div>
                <h1 style="text-align: center;">
                    <strong>Your code is <span style="color: #fc987e;"><%CODE%></span></strong>
                </h1>
            </div>`,
        confirmationLink: 'http://localhost:8081/verify/<%EMAIL%>/<%CODE%>',
        codeExpirationInterval: 24 * 60 * 60 * 1000
    }
}
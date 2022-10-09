// https://ethereal.email/
module.exports = {
    service: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        user: 'maddison.crooks@ethereal.email',
        password: 'dpZ5JXQnE16aaJ4m3y'
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
        confirmationLink: 'http://localhost:8080/verification?user=<%USER_ID%>&code=<%CODE%>',
        codeExpirationInterval: 24 * 60 * 60 * 1000
    }
}
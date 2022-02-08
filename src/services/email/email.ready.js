const { sendMail } = require('./email.methods');

module.exports = {
    
    sendEmailContactThanks: async contact => {
        const { name, email } = contact;
        
        emailPreparation = {

            to: email,
            dynamic_template_data: { name }

        }

        return await sendMail(emailPreparation);
        
    }

}
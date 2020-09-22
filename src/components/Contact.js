import React from "react";


class Contact extends React.Component{

    handleSubmit(event){
        event.preventDefault();
        let name = event.target.name.value,
            reply_to = event.target.email.value,
            message = event.target.message.value;

        let data = {service_id: 'service_d8l33kt', 
                    template_id: 'template_npdbw18',
                    user_id: 'user_0Mg5PW2HzFmNXjuCiw52z',
                    template_params: {
                        'from_name': name,
                        'reply_to': reply_to,
                        'message': message
                    }};
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)})
        .then(response => response.json((out) => console.log('EmailJS Response:', out)))
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        return (
            <section id='contact' className='flex height-fix'>
                <div id='contact-bg' className='contact-background'></div>
                <div className='contact-content'> 
                    <h1 style={{textAlign:'center', margin:'0px 0px 3vh', paddingTop:'1ch'}}>Contact Me</h1>
                    <form className='flex contact-form' onSubmit={this.handleSubmit}>
                        <input type='text' className='contact-field' name='name' placeholder='Name'></input>
                        <input type='text' className='contact-field' name='email' placeholder='Your Email'></input>
                        <textarea type='text' className='contact-field contact-textarea' name='message' placeholder='Your Message'></textarea>
                        <button className='contact-submit'>Submit</button>
                    </form>

                </div>
            </section>
        );
    }
}
 
export default Contact;
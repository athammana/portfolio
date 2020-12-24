import React from "react";


class Contact extends React.Component{
    
    handleSubmit(event) {
        event.preventDefault();
        document.querySelector('.submit-button').classList.add('state-1', 'animated');
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
        setTimeout(this.finalButtonMsg, 2000);
    }

    finalButtonMsg() {
        document.querySelector('.submit-button').classList.add('state-2');
        setTimeout(this.setInitialButtonState, 2000);
    };
    
    setInitialButtonState () {
        document.querySelector('.submit-button').classList.remove('state-1', 'state-2', 'animated');
    }
    
    render() {
        return (
            <section id='contact' className='flex height-fix'>
                <div id='contact-bg' className='contact-background'></div>
                <div className='contact-content'> 
                    <h1 style={{textAlign:'center', margin:'0px 0px 3vh', paddingTop:'1ch'}}>Contact Me</h1>
                    <form className='flex contact-form' onSubmit={this.handleSubmit}>
                        <input type='text' className='contact-field' name='name' placeholder='Name'></input>
                        <input type='text' className='contact-field' name='email' placeholder='Your Email'></input>
                        <textarea type='text' className='contact-field contact-textarea' name='message' placeholder='Your Message'></textarea>
                        <button class="submit-button state-0"><span class="pre-state-msg">Submit</span><span class="current-state-msg hide">Sending...</span><span class="done-state-msg hide">Done!</span></button>
                    </form>
                </div>
                <div id='contact-url' style={{ zIndex:1, marginTop: '10px' }}>
                    <img className='contact-icon' src={require('../ThirdPartyIcons/Github.png')} alt='Contact Icon' onClick={(e) => { e.preventDefault(); window.location.href = 'https://github.com/athammana'; }} />
                    <img className='contact-icon' src={require('../ThirdPartyIcons/Gmail.png')} alt='Contact Icon' onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.linkedin.com/in/abhijay-thammana/'; }} />
                    <img className='contact-icon' src={require('../ThirdPartyIcons/Linked.png')} alt='Contact Icon' onClick={(e) => { e.preventDefault(); window.location.href = 'https://www.linkedin.com/in/abhijay-thammana/'; }} />
                </div>
            </section>
        );
    }
}
 
export default Contact;
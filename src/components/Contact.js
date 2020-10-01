import React from "react";
import 'materialize-css';
import { Textarea, TextInput, Button, Icon, Row, Col } from "react-materialize";
import { Container, Grid } from "@material-ui/core";


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
                <Grid Container justify='center' align='center'>
                        <h1 style={{textAlign:'center', margin:'0px 0px 3vh', paddingTop:'1ch'}}>Contact Me</h1>
                        <form onSubmit={this.handleSubmit}>
                            <Grid item><TextInput type='text' name='name' placeholder='Name'></TextInput></Grid>
                            <Grid item><TextInput type='text' name='email' placeholder='Your Email'></TextInput></Grid>
                            <Grid item><Textarea type='text' name='message' placeholder='Your Message'></Textarea></Grid>
                            <Grid item><Button node="button" type="submit" waves="light">Submit<Icon right>send</Icon></Button></Grid>
                        </form>
                </Grid>
            </section>
        );
    }
}
 
export default Contact;
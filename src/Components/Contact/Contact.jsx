import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon   from '../../assets/call_icon.svg'



const Contact=()=>{
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6387076e-098e-49f7-898b-24f6b8cb668b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };




    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
               <h1>Get in Touch</h1> 
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects , so feel free to reach out me</p>
                </div>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" className="" /><p>naikmudavathkarthik@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                       <img src={call_icon} alt="" className="" /> <p> 9392783638</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" className="" /><p> Hyd , Telangana</p>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder="Enter Your Name" name='name' />
                    <label htmlFor="" className=""> Your Email </label>
                    <input type='email' placeholder="Enter your Email" name='email' />
                    <label> Write Your message here </label>
                    <textarea name='message' rows="8" placeholder='Enter your message' ></textarea>
                    <button type='submit' className="button contact-submit">Submit Now</button>

                </form>
            </div>

        </div> 

    )
}

export default Contact
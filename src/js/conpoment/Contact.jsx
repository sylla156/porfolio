import React, { Component } from 'react'
import Header from './Header'
import '../../style/style.css'
export default class Contact extends Component {
    
    constructor(props) {
        
        super(props);
        this.reSlide = this.reSlide.bind(this);
    }


    slide(){
        let contact = document.querySelector(".wrapper");
       
        if(window.innerWidth <= 800){
        document.querySelector(".reslide").click()
        }
        contact.style.transform = 'translateX(0vw)'
    }

    reSlide(){
        let contact = document.querySelector(".wrapper");
        contact.style.transform = 'translateX(-100vw)';
       
    }

contact(e){
    if(e === undefined){
        return 0;
    }
    else{
        if(e.type === 'click'){
            this.slide();
        }
    }
}
    render() {
        this.contact(this.props.contact);
        return(
            <>
    
    <div className="wrapper">
        <div className="btnExit" onClick={this.reSlide}>exit</div>
        <div className="container">
            <div className="hero-content">

                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="" data-wow-delay="1s">say hello👋</h1>
                        <br/>
                        <p className="wow fadeInUp" data-wow-delay="1.2s">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Neque, accusantium sint quod voluptatem dolorum, quaerat, 
                          
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="whitespace"></div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8">
                    <form name="contact-form" id="contact-form" method="POST" action="">
                        <ul>
                            <li className="wow fadeInUp" data-wow-delay="1.4s">
                                <label htmlFor="contact-name">Name: </label>
                                <div className="textarea">
                                    <input type="text" name="contact-name" id="contact-name" value="" required />
                                </div>
                            </li>

                            <li className="wow fadeInUp" data-wow-delay="1.6s">
                                <label htmlFor="contact-email">Email: </label>
                                <div className="textarea">
                                    <input type="email" name="contact-name" id="contact-email" value="" required />
                                </div>
                            </li>

                            <li className="wow fadeInUp" data-wow-delay="1.6s">
                                <label htmlFor="contact-project">Message: </label>
                                <div className="textarea"   >
                                    <textarea type="email" name="contact-project" id="contact-project" rows="4" value="" required></textarea>
                                </div>
                            </li>
                        </ul>

                        <button type="submit" name="contact-submit" id="contact-submit" className="send wow fadeInUp">Send Message</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
            </>

        );
    }
};
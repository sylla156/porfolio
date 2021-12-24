import React, { Component } from 'react'
import '../../style/style.css'
export default class Contact extends Component {
    
    constructor(props) {
        
        super(props);
        this.reSlide = this.reSlide.bind(this);
        this.state = {
            name:"",
            email:"",
            textarea : ""
        }

        this.hanbleChange = this.hanbleChange.bind(this);
    }


    slide(){
        let contact = document.querySelector(".wrapper");
       
        if(window.innerWidth <= 500){
        document.querySelector(".reslide").click()
        }
        contact.style.transform = 'translateX(0vw)'
        document.body.style.overflow = "hidden"

    }

    reSlide(){
        let contact = document.querySelector(".wrapper");
        contact.style.transform = 'translateX(-100vw)';
        document.body.style.overflowY = "scroll"


       
    }

    hanbleChange(e){
        let type = e.target.type;
        switch(type){
            case 'text':
                this.setState({name:e.target.value})
                break;
            case 'email':
                this.setState({email:e.target.value})
                break;
            case 'textarea':
                this.setState({textarea:e.target.value})
                break;
            default:
            console.log('merde');
        }
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
                        <h1 className="" data-wow-delay="1s">sI have the solution👋</h1>
                        <br/>
                        <p className="wow fadeInUp" data-wow-delay="1.2s">
                        It is through contact with others that man learns what he knows.
thank you for contacting me for your project or who knows
                          
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="whitespace"></div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8">
                    <form name="contact-form" id="contact-form" action="mailto:info@w3docs.com" method="get" enctype="text/plain">
                        <ul>
                            <li className="wow fadeInUp" data-wow-delay="1.4s">
                                <label htmlFor="contact-name">Name: </label>
                                <div className="textarea">
                                    <input type="text" name="contact-name" id="contact-name" value={this.state.name} onChange={this.hanbleChange} required />
                                </div>
                            </li>

                            <li className="wow fadeInUp" data-wow-delay="1.6s">
                                <label htmlFor="contact-email">Email: </label>
                                <div className="textarea">
                                    <input type="email" name="contact-name" id="contact-email" value={this.state.email} onChange={this.hanbleChange} required />
                                </div>
                            </li>

                            <li className="wow fadeInUp" data-wow-delay="1.6s">
                                <label htmlFor="contact-project">Message: </label>
                                <div className="textarea"   >
                                    <textarea type="email" name="contact-project" id="contact-project" rows="4" value={this.state.textarea} onChange={this.hanbleChange} required></textarea>
                                </div>
                            </li>
                        </ul>

                        <button type="submit" name="contact-submit" id="contact-submit" className="send wow fadeInUp" onClick={(e)=>{
                            window.location.reload()
                        }}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
            </>

        );
    }
};

function Contact(){
    return(
        <>
        <h1 className="heading">Contact</h1>
        <p className="about" id="contact">
            <span>E-mail: </span><span>zubairkhurshid12@gmail.com</span>
        </p>
        <div className="form">
        <p className="feed">Write Feedback</p>
        <input className="input" type="text" placeholder="Full Name"/>
        <input className="input" type="email" placeholder="E-mail"/>
        <textarea className="textarea" placeholder="Feedback"/>
        <input className="button2" type="submit"/>
        </div>
        </>
    )
}

export default Contact;
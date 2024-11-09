import Footer from "../components/Footer";
export default function Contact() {
    return (
        <>
        
        <section id="contact">
            <div id="left-container">
                <h1>Contact Me</h1>
                <p>
                    <img src="pngs/email.png" alt="email" id="email" />
                hassanalijunejo881@gmail.com
                </p>
                <p>
                    <img src="pngs/location.png" alt="location" id="location" />
                Karachi, Pakistan
                </p>
                <p>
                    <img src="pngs/linkedin.png" alt="linkedin" id="linkedin" />
                    <a href="https://www.linkedin.com/in/hassan-ali-junejo-5714162b4/" target="_blank">Hassan Ali Junejo .</a>
                </p>
                <p>
                    <img src="pngs/github.png" alt="github" id="github" />
                    <a href="https://github.com/" target="_blank">Hassan Ali Junejo</a>
                </p>
            </div>

            <div id="right-container">
                <form action="" id="form">
                    <legend>Your Name:</legend>
                    <input type="text" id="name" name="name" required/>
                    <legend>Your Email:</legend>
                    <input type="email" id="email" name="email"/>
                    <legend>Your message:</legend>
                    <textarea name="message" id="message" rows={9} cols={30}></textarea> <br />
                    <button>Send Message</button>
                </form>
            </div>

        </section>

        <Footer/>
        </>

    );
}
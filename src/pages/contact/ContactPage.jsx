import Navbar from "../../components/Navbar";
import SectionContatct from "../../components/sections/SectionContact/SectionContact";
import languages from "../../languages.json"

function ContactPage(){
    const content = languages.contact
    return <>
        <Navbar />
        <SectionContatct 
            name={content.name} 
            email={content.email}
            phone={content.phone}
            linkedin={content.linkedin}
            github={content.github}
        />
    </>
}

export default ContactPage;
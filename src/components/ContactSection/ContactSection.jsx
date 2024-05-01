import { Section, TelephoneNumber, EmailAddress } from "./ContactSection.styled";
import TitleSection from "../TitleSection/TitleSection";

const ContactSection = () => {
    return (
        <Section id="about">
            <TitleSection title="Не соромся," description="Дзвони нам:" />
            <TelephoneNumber href="tel:+380999999999">+380999999999</TelephoneNumber>
            <EmailAddress href="mailto:3dUO4@example.com">3dUO4@example.com</EmailAddress>
        </Section>
    );
};

export default ContactSection
import { Section, Title, Description, Photo, DivOne, Icon, Button, DivBtnSection, DivSecond, ButtonSecond } from "./Hero.styled";
import pizza from '../../media/pizza-general.png'
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
        <Section>
            <DivOne>
                <Title>Все є кращим разом з <span style={{color: 'red'}}>ПІЦЕЮ</span></Title>
                <Description>Поїш піцу і будеш щасливий до кінця своїх днів, якщо кишечник не лусне швидше, а так то смачного!</Description>
                <DivBtnSection>
                    <Button>Order Now <Icon icon={faCircleArrowRight} style={{marginBottom: '-3px', height: '20px'}} /></Button>
                    <ButtonSecond>Learn More <Icon icon={faCircleArrowRight} style={{marginBottom: '-3px', height: '20px'}} /></ButtonSecond>
                </DivBtnSection>
            </DivOne>
            <DivSecond>
                <Photo src={pizza} alt="pizza"></Photo>
            </DivSecond>
        </Section>
    );
};

export default Hero
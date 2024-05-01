import { Section, Image, SalladDivOne, SalladDivTwo, SalladDiv } from "./HomeMenu.styled";
import salat1 from '../../media/salat1.png'
import salat2 from '../../media/salat2.png'
import MenuItem from "../MenuItem/MenuItem";
import TitleSection from "../TitleSection/TitleSection";

const HomeMenu = () => {
    return (
        <Section>
            <SalladDiv>
                <SalladDivOne>
                    <Image src={salat1} alt="salat1"></Image>
                </SalladDivOne>
                <SalladDivTwo>
                    <Image src={salat2} alt="salat2"></Image>
                </SalladDivTwo>
            </SalladDiv>
            <TitleSection title="Перевір сам" description="Меню" />
            <MenuItem />
        </Section>
    );
};

export default HomeMenu
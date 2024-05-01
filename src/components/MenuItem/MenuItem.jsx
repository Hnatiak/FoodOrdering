import { PizzaItem, PizzaTitle, PizzaDescription, MenuDiv, PizzaBtn } from "./MenuItem.styled";
import pizza from '../../media/pizza-general.png'

const MenuItem = () => {
    return (
        <MenuDiv>
            <PizzaItem>
                <img src={pizza} alt="pizza" />
                <PizzaTitle>Reperoni Pizza</PizzaTitle>
                <PizzaDescription>I wanna buy this pizza, its soo teasty!</PizzaDescription>
                <PizzaBtn onClick={() => console.log("clicked")}>Add to cart $12</PizzaBtn>
            </PizzaItem>
            <PizzaItem>
                <img src={pizza} alt="pizza" />
                <PizzaTitle>Reperoni Pizza</PizzaTitle>
                <PizzaDescription>I wanna buy this pizza, its soo teasty!</PizzaDescription>
                <PizzaBtn onClick={() => console.log("clicked")}>Add to cart $12</PizzaBtn>
            </PizzaItem>
            <PizzaItem>
                <img src={pizza} alt="pizza" />
                <PizzaTitle>Reperoni Pizza</PizzaTitle>
                <PizzaDescription>I wanna buy this pizza, its soo teasty!</PizzaDescription>
                <PizzaBtn onClick={() => console.log("clicked")}>Add to cart $12</PizzaBtn>
            </PizzaItem>

            <PizzaItem>
                <img src={pizza} alt="pizza" />
                <PizzaTitle>Reperoni Pizza</PizzaTitle>
                <PizzaDescription>I wanna buy this pizza, its soo teasty!</PizzaDescription>
                <PizzaBtn onClick={() => console.log("clicked")}>Add to cart $12</PizzaBtn>
            </PizzaItem>
            <PizzaItem>
                <img src={pizza} alt="pizza" />
                <PizzaTitle>Reperoni Pizza</PizzaTitle>
                <PizzaDescription>I wanna buy this pizza, its soo teasty!</PizzaDescription>
                <PizzaBtn onClick={() => console.log("clicked")}>Add to cart $12</PizzaBtn>
            </PizzaItem>
            <PizzaItem>
                <img src={pizza} alt="pizza" />
                <PizzaTitle>Reperoni Pizza</PizzaTitle>
                <PizzaDescription>I wanna buy this pizza, its soo teasty!</PizzaDescription>
                <PizzaBtn onClick={() => console.log("clicked")}>Add to cart $12</PizzaBtn>
            </PizzaItem>
        </MenuDiv>
    );
};

export default MenuItem
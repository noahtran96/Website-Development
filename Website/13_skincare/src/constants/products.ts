import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";

export const SliderProducts: Product[] = [
  {
    name: "SKIN",
    detail: "Super Skincare",
    price: 25,
    img: img1,
  },
  {
    name: "SKIN",
    detail: "Super Skincare",
    price: 30,
    img: img2,
  },
  {
    name: "NATURE",
    detail: "Super Skincare",
    price: 25,
    img: img3,
  },
];
export interface Product {
  name: string;
  detail: string;
  price: number;
  img: string;
  type?: string;
}
export const ProductsData: Product[] = [
  {
    name: "SKIN",
    detail: "Super Skincare",
    price: 25,
    img: img1,
    type: "skincare",
  },
  {
    name: "SKIN",
    detail: "Super Skincare",
    price: 30,
    img: img2,
    type: "skincare",
  },
  {
    name: "NATURE",
    detail: "Super Skincare",
    price: 25,
    img: img3,
    type: "skincare",
  },
  {
    name: "FOUNDATION",
    detail: "Super Skincare",
    price: 25,
    img: img4,
    type: "foundation",
  },
  {
    name: "CONDITIONER",
    detail: "Super Skincare",
    price: 30,
    img: img5,
    type: "conditioner",
  },
  {
    name: "NATURE",
    detail: "Super Skincare",
    price: 25,
    img: img6,
    type: "skincare",
  },
  {
    name: "CONDITIONER",
    detail: "Best Conditioner",
    price: 30,
    img: img7,
    type: "conditioner",
  },
  {
    name: "CONDITIONER",
    detail: "Best Conditioner",
    price: 30,
    img: img8,
    type: "conditioner",
  },
  {
    name: "CONDITIONER",
    detail: "Best Conditioner",
    price: 30,
    img: img9,
    type: "conditioner",
  },
  {
    name: "CONDITIONER",
    detail: "Best Conditioner",
    price: 30,
    img: img10,
    type: "conditioner",
  },
  {
    name: "FOUNDATION",
    detail: "Nourish Your Skin",
    price: 12,
    img: img11,
    type: "foundation",
  },
  {
    name: "FOUNDATION",
    detail: "Nourish Your Skin",
    price: 12,
    img: img12,
    type: "foundation",
  },
  {
    name: "FOUNDATION",
    detail: "Nourish Your Skin",
    price: 12,
    img: img13,
    type: "foundation",
  },
  {
    name: "FOUNDATION",
    detail: "Nourish Your Skin",
    price: 12,
    img: img14,
    type: "foundation",
  },
];

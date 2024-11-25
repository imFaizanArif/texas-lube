import EmblaCarousel from './EmblaCarousel';
import './embla.css';

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const data = [
    {
        img: '/logo.webp',
        title: 'We are best Engine Oil Company',
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1692117162332-2701afb100fb?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Superior Quality Engine Oil',
    },
    {
        img: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Lubricants for all types of vehicles',
    },
]
const HeroSlider = () => (
    <>
        <EmblaCarousel slides={data} options={OPTIONS} />
    </>
);

export default HeroSlider;

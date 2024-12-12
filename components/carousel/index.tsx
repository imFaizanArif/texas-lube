import EmblaCarousel from './EmblaCarousel';
import './embla.css';

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const data = [
     
    {
        img: '/4.svg',
        title: 'We are best Engine Oil Company1',
    },
    {
        img: '/5.svg',
        title: 'We are best Engine Oil Company2',
    },
]
const HeroSlider = () => (
    <>
        <EmblaCarousel slides={data} options={OPTIONS} />
    </>
);

export default HeroSlider;

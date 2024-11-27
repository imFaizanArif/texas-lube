import EmblaCarousel from './EmblaCarousel';
import './embla.css';

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const data = [
    {
        img: '/1.svg',
        title: 'We are best Engine Oil Company',
    },
    {
        img: '/2.svg',
        title: 'We are best Engine Oil Company',
    },
    {
        img: '/3.svg',
        title: 'We are best Engine Oil Company',
    },
    {
        img: '/4.svg',
        title: 'We are best Engine Oil Company',
    },
    {
        img: '/5.svg',
        title: 'We are best Engine Oil Company',
    },
]
const HeroSlider = () => (
    <>
        <EmblaCarousel slides={data} options={OPTIONS} />
    </>
);

export default HeroSlider;

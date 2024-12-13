import EmblaCarousel from './EmblaCarousel';
import './embla.css';

const OPTIONS = { loop: true }
 
const data = [
     
    {
        img: '/hero1.jpg',
        title: 'We are best Engine Oil Company1',
    },
    {
        img: '/hero2.jpg',
        title: 'We are best Engine Oil Company1',
    },
    {
        img: '/hero3.jpg',
        title: 'We are best Engine Oil Company1',
    },
    {
        img: '/hero4.jpg',
        title: 'We are best Engine Oil Company1',
    },
    {
        img: '/hero5.jpg',
        title: 'We are best Engine Oil Company1',
    },
]
const HeroSlider = () => (
    <>
        <EmblaCarousel slides={data} options={OPTIONS} />
    </>
);

export default HeroSlider;

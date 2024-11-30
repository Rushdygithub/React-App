import reactImage from '../../assets/react-core-concepts.png';
const reactContent = ['Fundamental','Intermidiate','Core'];
import './Header.css';

function RandomConceptGen() {
  const random = Math.floor(Math.random() * reactContent.length);
  return random;
}

export function Header() {
  return (
    <header>
      
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials!</h1>
        <p>
          {reactContent[RandomConceptGen()]} concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
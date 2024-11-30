import react, {useState} from 'react';
import {Header} from './componants/Header/Header'
import { CoreConcept } from './componants/CoreConcept/CoreConcept';
import { CORE_CONCEPTS } from './data';
import {ButtonListFunction} from './componants/ButtonList/ButtonList.jsx'



function App() {
  
  // let updatedContent = 'dynamic content' this will not update - app componants not excutes more than one time
  const [selectedTopic, setSelectedTopic] = useState('Please Click me')


  function handleSelect(selectedButton) {
    //Console log output
    console.log(selectedTopic)
    setSelectedTopic(selectedButton)
    console.log('data',selectedTopic);
  }

  //To check excution of the react app
  console.log('======================>React App Componants Intailized');

  return (
    <div>
      <Header />
      <main>
      <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        {/* Passing child building propes */}
        <section id="examples">
          <menu>
              {/* we pass a function value to button  */}
              <ButtonListFunction onSelect={() => handleSelect('componants')}>Componants</ButtonListFunction>
              <ButtonListFunction onSelect={()=> handleSelect('jsx')}>JSX</ButtonListFunction>
              <ButtonListFunction onSelect={()=> handleSelect('props')}>Props</ButtonListFunction>
              <ButtonListFunction onSelect={()=> handleSelect('state')}>State</ButtonListFunction>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;

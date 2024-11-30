import react, {useState} from 'react';
import {Header} from './componants/Header/Header'
import { CoreConcept} from './componants/CoreConcept/CoreConcept';
import { CORE_CONCEPTS,EXAMPLES } from './data';
import {ButtonListFunction} from './componants/ButtonList/ButtonList.jsx'



function App() {
  
  // let updatedContent = 'dynamic content' this will not update - app componants not excutes more than one time
  const [selectedTopic, setSelectedTopic] = useState('')

  console.log('intal==========>', EXAMPLES[selectedTopic])

  function handleSelect(selectedButton) {
    //Console log output
    console.log(selectedTopic)
    setSelectedTopic(selectedButton)
    console.log('data',selectedTopic);
  }

  let tableContent = <p>Please Select A Topic</p>

  if(selectedTopic) {
   tableContent =  <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
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
              <ButtonListFunction onSelect={() => handleSelect('components')}>Componants</ButtonListFunction>
              <ButtonListFunction onSelect={()=> handleSelect('jsx')}>JSX</ButtonListFunction>
              <ButtonListFunction onSelect={()=> handleSelect('props')}>Props</ButtonListFunction>
              <ButtonListFunction onSelect={()=> handleSelect('state')}>State</ButtonListFunction>
          </menu>
            {tableContent}
        </section>
      </main>
    </div>
  );
}

export default App;

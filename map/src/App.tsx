import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';    // Тема PrimeReact
import 'primereact/resources/primereact.min.css';             // Основные стили PrimeReact
import 'primeicons/primeicons.css';                           // Иконки PrimeIcons
import 'primeflex/primeflex.css';                             // CSS Flex от PrimeReact (если нужно)
import { Button } from 'primereact/button';

function App() {
  

  return (
    <div className="App">
      <Button label="Click me" onClick={() => console.log("Button clicked!")}/>
    </div>
  );
}

export default App;
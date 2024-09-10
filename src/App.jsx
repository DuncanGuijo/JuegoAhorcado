import { useState, useEffect, useRef } from 'react'
import './App.css'
import Abecedario from './components/Abecedario'
import Guiones from './components/Guiones'
import Ahorcado from './components/Ahorcado'
import Palabras from './palabras'
import Vidas from './components/Vidas'

function App() {
  const [palabra, setPalabra] = useState(['']);
  const [progreso, setProgreso] = useState(['']);
  const [vidas, setVidas] = useState(5);
  const initialRender = useRef(true); // Ref para controlar el primer renderizado

  const getRandomWord = (palabra) =>{
    if(palabra) alert(palabra.join(''))
    let NewPalabra = Palabras[Math.floor(Math.random() * Palabras.length)].toUpperCase();
    NewPalabra = NewPalabra.split("");
    let newPalabraCopy = [...NewPalabra];
    setPalabra(NewPalabra);
    setProgreso(newPalabraCopy.fill('_'));
    setVidas(5);
  }

  const updateProgreso = (letra) => {
    let newProgreso = [...progreso];
    let letraEncontrada = false;
    palabra.forEach(function (e, i) {
      if (letra === e.normalize("NFD").replace(/[\u0300-\u036f]/g, "")){
        newProgreso[i] = letra;
        letraEncontrada = true;
      } 
    })
    
    setProgreso(newProgreso);
    
    if (!letraEncontrada && progreso.includes('_')) {
      setVidas(vidas - 1);
      
      if(parseInt(vidas) === 1) getRandomWord(palabra)
      }
  };

  useEffect(() => {
    if (initialRender.current) {
      // Evitar que el código se ejecute en el primer renderizado
      initialRender.current = false;
      return;
    }
    if (!progreso.includes('_')) {
      getRandomWord();
    }
  }, [progreso]);

  useEffect(() =>{
    getRandomWord();
  },[])

  const numberOfLines = 20;
  const lines = Array.from({ length: numberOfLines }, (_, index) => index);

  return (
    <div className="h-screen">
      <div className="bg-white p-6 shadow-lg mx-auto w-2/3 h-3/4 m-10 border border-gray-300 rounded-md relative flex flex-col justify-around gap-5">
        <div className="absolute top-0 left-0 right-0">
          {lines.map(line => (
            <div
              key={line}
              className="border-t border-gray-300 absolute w-full"
              style={{ top: `${line * 20}px`, zIndex: 0 }}
            />
          ))}
        </div>
        <div className='flex flex-row justify-around h-6'>
          <Ahorcado vidas={vidas}/>
          <Vidas vidas={vidas}/>        
        </div>
        <Guiones progreso={progreso} />
        <Abecedario updateProgreso={updateProgreso} />
      </div>
    </div>
  )
}

export default App

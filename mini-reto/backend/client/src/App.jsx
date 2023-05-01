import React,{ useState} from 'react'
import Header from './Components/Header'
import Productos from './Components/Productos'
import Productos2 from './Components/Productos2'
import Productos3 from './Components/Productos3'
import Productos4 from './Components/Productos4'
import Productos5 from './Components/Productos5'

const App = () => {
  const[data,setData] = React.useState(null);

  React.useEffect(()=>{
    fetch("/api/")
      .then((res) => res.json)
      .then((data) => setData(data.message));
  })

  const [selectedComponent,setSelectedComponent] = useState(Productos);

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };
  
  let ComponentToRender;
  switch (selectedComponent) {
    case 'Serums':
      ComponentToRender = Productos;
      break;
    case 'Cremas':
      ComponentToRender = Productos2;
      break;
    case 'Bloqueadores':
      ComponentToRender = Productos3;
      break;
    case 'Mascarillas':
      ComponentToRender = Productos4;
      break;
    case 'Limpiadores':
      ComponentToRender = Productos5;
      break;
    default:
      ComponentToRender = Productos;
  }

  return (
    <div>
      <Header onButtonClick={handleButtonClick}/>
      <div>
        <ComponentToRender></ComponentToRender>
      </div>
    </div>
  )
}

export default App
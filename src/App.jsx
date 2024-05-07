import './App.css';
import Testimonio from './components/testimonio.jsx';
// import imagentaxidriver from './components/img/Publicity-still-Robert-De-Niro-DeNiro-Taxi-Driver-Martin-Scorsese.webp'
// import imagenscarface from './components/img/Scarface_45123-e759YH.tmp_.jpg'
// import imagenseven from './components/img/p17198_v_h9_az.jpg';
import peliculas from './components/peliculas.json';


function App() {
  return (
    <div className='App'> 
      {/* Usamos map() para iterar sobre cada película en el array */}
      {peliculas.map((pelicula, index) => (
        // Para cada película, renderizamos el componente Testimonio con sus datos
        <Testimonio
          key={index}
          foto={pelicula.foto}
          titulo={pelicula.titulo}
          sinopsis={pelicula.sinopsis}
          director={pelicula.director}
          año={pelicula.año}
        />
      ))}
    </div>
  );
}

export default App;

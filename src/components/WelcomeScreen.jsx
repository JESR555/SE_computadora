import { Button, Card } from 'react-bootstrap';
import { FaLaptop } from 'react-icons/fa'; // Usando un ícono de laptop
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = ({ nextStep }) => {
   const navigate = useNavigate();
   return (
      <div
         className="d-flex justify-content-center align-items-center w-100"
         style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #007bff, #28a745)', // Degradado de azul a verde
            width: '100%', // Asegura que ocupe todo el ancho
            position: 'relative', // Para asegurar que el fondo cubra toda la pantalla
            padding: '20px', // Agrega padding para evitar que los bordes del contenedor toquen el límite de la pantalla
         }}
      >
         <Card className="p-5 shadow-lg rounded-3" style={{ maxWidth: '600px', width: '100%', border: 'none' }}>
            <Card.Body className="text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
               <Card.Title as="h1" className="display-3 text-dark font-weight-bold" style={{ letterSpacing: '2px' }}>
                  <FaLaptop className="mb-3" style={{ fontSize: '3rem', color: '#007bff' }} />
                  CompuChoice
               </Card.Title>
               <Card.Text className="lead text-dark mb-4" style={{ fontSize: '1.2rem' }}>
                  Este sistema ayudará a elegir la computadora más adecuada según las necesidades y presupuesto del cliente.
               </Card.Text>
               <span className="d-flex flex-column">

                  <Button
                     variant="primary"
                     size="lg"
                     className="btn btn-primary"
                     onClick={() => navigate('/quiz')}
                     style={{ fontSize: '1.2rem', borderRadius: '50px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)' }}
                  >
                     Comenzar analisis
                  </Button>
                  <Button variant="secondary"
                     size="lg"
                     className="px-4 py-3 mt-3"
                     style={{ fontSize: '1.2rem', borderRadius: '50px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)' }}
                     onClick={() => navigate('/inventory')}>
                     Inventario
                  </Button>
               </span>
            </Card.Body>
         </Card>
      </div>
   );
};

export default WelcomeScreen;
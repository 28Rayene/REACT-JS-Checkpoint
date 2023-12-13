

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <>
    <div className='navbar'>
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form >
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="country"
            aria-label="country"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <Form inline>
      
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div>
    
    <div className="cards">
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/512px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png?20230718184835" />
      <Card.Body>
        <Card.Title>France</Card.Title>
        <Card.Text>
        La France (Écouter), en forme longue depuis 1875 la République française (Écouter), est un État souverain transcontinental dont le territoire métropolitain s'étend en Europe de l'Ouest et dont le territoire ultramarin s'étend dans les océans Indien, Atlantique et Pacifique, ainsi qu'en Antarctique8 et en Amérique du Sud. Le pays a des frontières terrestres avec la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie, l'Espagne, Monaco et l'Andorre en Europe,
          
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1920px-Flag_of_Tunisia.svg.png" />
      <Card.Body>
        <Card.Title>tunisia</Card.Title>
        <Card.Text>
        Bordé au nord et à l'est par la mer Méditerranée (1 566 km de côtes), à l'ouest par l'Algérie avec 965 km de frontière commune et au sud-est par la Libye avec 459 km de frontière, sa capitale Tunis est située dans le Nord-Est du pays, au fond du golfe du même nom. Plus de 30 % de la superficie du territoire est occupée par le désert du Sahara, le reste étant constitué de régions montagneuses et de plaines fertiles.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/1920px-Flag_of_Spain.svg.png" />
      <Card.Body>
        <Card.Title>spain</Card.Title>
        <Card.Text>
        L'Espagne est bordée au nord-est par les Pyrénées, qui constituent une frontière naturelle avec la France et l'Andorre; à l'est et au sud-est par la mer Méditerranée, au sud-sud-ouest par le territoire britannique de Gibraltar et le détroit du même nom, ce dernier séparant le continent européen de l'Afrique. Le Portugal est limitrophe de l'Espagne à l'ouest tandis que l'océan Atlantique borde le pays à l'ouest-nord-ouest; enfin le golfe de Gascogne baigne le littoral nord. Le territoire espagnol inclut également les îles Baléares en Méditerranée, les îles Canaries dans l'océan Atlantique au large de la côte africaine, et deux villes autonomes en Afrique du Nord, Ceuta et Melilla, limitrophes du Maroc.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>


      

  
         
    </div>
    </>
      
    
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <h1>PartCheck OEM Suppliers</h1>

      <div className='listContainer'>
        <Card
          bg={"light"}
          // key={variant}
          text={"dark"}
          style={{ width: '50%' }}
          className="mb-2"
        >
          <div classname="supplierItems">
            <div className='supplierInfo'>
              <h5>Supplier Name</h5>
              <h5>State</h5>
            </div>
            
            <div className="ratingStar">
              Star*Star*Star
            </div>
            <div className="vehicleList">
              <h6>vehicle make</h6>
            </div>
          </div>
        </Card>
        
        <Card
          bg={"light"}
          // key={variant}
          text={"dark"}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
      

    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import StarRating from './starRating';

function App() {
  return (
    <div className="App">
      <h1>PartCheck OEM Suppliers</h1>

      <div className='listContainer'>
        <Card
          bg={"light"}
          style={{ width: '600px' }}
          className="mb-3"
        >
          <div className="supplierItems">
            <div className='supplierInfo'>
              <h5 className='text-secondary ms-4'>Supplier Name</h5>
              <h5 className='me-4'>State</h5>
            </div>
            
            <div className="ms-4" id="ratingStar">
              <StarRating />
              {/* {[...Array(5)].map((star) => {        
                return (         
                  <span className="star">&#9733;</span>        
                );
              })} */}
            </div>
            <div className="ms-4" id="vehicleList">
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

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import StarRating from './starRating';

function MainFunction() {
    const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
      axios
        .get("http://portalapi.partscheck.com.au/api.php?class=Access&method=fetchExtensionQuoteDetails&hash=DDD123456xx")
        .then((res) => res.data)
        .then(console.log(data))
        .then(console.log(data.packet))
    );
  
    if (isLoading) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;
  
    return (
      <div>
        <h1>Something Here</h1>

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
        </div> 

        <h1>there</h1>
        {/* <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
        <div>{isFetching ? "Updating..." : ""}</div> */}
      </div>
    );
}

export default MainFunction;
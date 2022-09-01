import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import StarRating from './starRating';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MainFunction() {
    const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
      axios
        .get("http://portalapi.partscheck.com.au/api.php?class=Access&method=fetchExtensionQuoteDetails&hash=DDD123456xx")
        .then((res) => res.data)
        .then(console.log(data))
    );

    if (isLoading) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;

    return (
      <div>

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

        <h1>true</h1>
        {/* <h1>{data.isSuccess}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
        <div>{isFetching ? "Updating..." : ""}</div> */}
        <ReactQueryDevtools initialIsOpen />
      </div>
    );
}

export default MainFunction;
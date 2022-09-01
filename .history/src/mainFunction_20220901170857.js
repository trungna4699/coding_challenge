import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function MainFunction() {
    const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
      axios
        .get("https://api.github.com/repos/tannerlinsley/react-query")
        .then((res) => res.data)
    );
  
    if (isLoading) return "Loading...";
  
    if (error) return "An error has occurred: " + error.message;
  
    return (
      <div>
        <h1>Something Here</h1>

        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
        <div>{isFetching ? "Updating..." : ""}</div>
      </div>
    );
}

export default MainFunction;
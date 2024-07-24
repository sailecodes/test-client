import axiosc from "./utilities/axios";
import { gql, useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(gql`
    query {
      test {
        dummy_attr
      }
    }
  `);

  const handleREST = async () => {
    const response = await axiosc.get("/test");
    console.log(response.data);
  };

  if (!loading && !error && data) console.log(data);

  return <button onClick={handleREST}>REST Button</button>;
}

export default App;

import axiosc from "./utilities/axios";
import { gql, useQuery } from "@apollo/client";

function App() {
  const { loading, error, data } = useQuery(
    gql`
      query {
        test {
          dummy_attr
        }
      }
    `,
    {
      onCompleted: (data) => {
        console.log("Query successful");
        console.log(data);
      },
    }
  );

  const handleREST = async () => {
    const response = await axiosc.get("/test");
    console.log(response.data);
  };

  return (
    <>
      <button onClick={handleREST}>REST Button</button>
    </>
  );
}

export default App;

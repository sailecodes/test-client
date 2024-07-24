import axiosc from "./utilities/axios";
import { gql, useMutation, useQuery } from "@apollo/client";

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

  // const [mutate, { loading, error, data }] = useMutation(gql`
  //   mutation {
  //     mutationTest
  //   }
  // `);

  const handleREST = async () => {
    const response = await axiosc.get("/test");
    console.log(response.data);
  };

  const handleGQLMutation = async () => {
    // await mutate();
  };

  // if (!loading && !error && data) console.log(data);

  return (
    <>
      <button onClick={handleREST}>REST Button</button>
      <button onClick={handleGQLMutation}>GQL Mutate Button</button>
    </>
  );
}

export default App;

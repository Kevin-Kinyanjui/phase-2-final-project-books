import React, { useContext } from "react";
import { booksContext } from "../App";

function Recommendations() {
  // const [recommendations, setRecommendations] = useState(null);
  let { books } = useContext(booksContext);
  console.log(books);

  return (
    <>
      <div className="homeStyle">
        <h1>Recommendations just for you!</h1>{" "}
      </div>
      <div>Recommendations</div>
    </>
  );
}

export default Recommendations;

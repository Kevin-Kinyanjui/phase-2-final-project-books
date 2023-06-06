import React, { useContext } from "react";
import { booksContext } from "../App";

function Recommendations() {
  // const [recommendations, setRecommendations] = useState(null);
  let { books } = useContext(booksContext);
  console.log(books);

  return <div>Recommendations</div>;
}

export default Recommendations;

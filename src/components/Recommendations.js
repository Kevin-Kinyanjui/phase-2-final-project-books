import React, { useContext } from "react";
import { booksContext } from "../App";

function Recommendations() {
  const { books } = useContext(booksContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const topRecommendations = books.sort((a, b) => b.rating - a.rating).slice(0, 3);
    setRecommendations(topRecommendations);
  }, [books]);

  return <div>Recommendations</div>;
}

export default Recommendations;

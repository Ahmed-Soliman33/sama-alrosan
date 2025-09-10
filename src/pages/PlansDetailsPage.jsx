import { useParams } from "react-router-dom";

const PlansDetailsPage = () => {
  const params = useParams();

  return (
    <h1>
      {params.planId
        ? `Details for Plan ID: ${params.planId}`
        : "No Plan ID provided."}
    </h1>
  );
};

export default PlansDetailsPage;

import { useParams } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  console.log(id);
  return <div>PersonDetail</div>;
};

export default PersonDetail;

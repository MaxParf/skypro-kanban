import { useParams, useNavigate } from "react-router-dom";
import PopBrowse from "../../components/Popups/PopBrowse/PopBrowse";

export default function Card() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <PopBrowse id={id} onClose={() => navigate("/")} />;
}
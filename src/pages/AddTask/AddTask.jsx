import { useNavigate } from "react-router-dom";
import PopNewCard from "../../components/Popups/PopNewCard/PopNewCard";

export default function AddTask() {
  const navigate = useNavigate();

  // Перекидываем пользователя в Main
  const handleClose = () => {
    navigate("/");
  };

  return <PopNewCard onClose={handleClose} />;
}
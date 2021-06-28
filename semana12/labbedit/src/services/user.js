import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeedPage } from "../Routes/coordinator";

export const login = (
  body,
  clear,
  history,
  setRightButtonText,
  
) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeedPage(history);
      setRightButtonText("Logout");
    })
    .catch((error) => {
      console.log(error);
      //alert(error.response.data.message);
    });
};

//.then((res) => console.log(res))
//.catch((err) => console.log(err))

export const cadastroPage = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();

      goToFeedPage(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

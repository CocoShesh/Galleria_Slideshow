import axios from "axios";

const Url = import.meta.env.VITE_APP_BASE_URL;
export const getData = async () => {
  try {
    let config = {
      method: "get",
      url: `${Url}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error(error);
  }
};

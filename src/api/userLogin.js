import axios from "axios";

export const userLogin = async (email, password) => {
  const URL = "https://api.escuelajs.co/api/v1/auth/login";
  try {
    const { data } = await axios.post(URL, { email, password });
    return { success: true, data }; // contains access_token
  } catch (err) {
    return {
      success: false,
      error: err.response?.data || err.message, // structured error info
    };
  }
};

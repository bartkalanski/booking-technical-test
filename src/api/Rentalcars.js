import axios from "axios";

const Rentalcars = axios.create({
  baseURL:
    "https://www.rentalcars.com/",
});

export default Rentalcars;

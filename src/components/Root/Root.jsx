import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import DonationCards from "../DonationCards/DonationCards";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

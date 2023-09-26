import Banner from "../Banner/Banner";
import DonationCards from "../DonationCards/DonationCards";

import Header from "../Header/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <DonationCards></DonationCards>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;

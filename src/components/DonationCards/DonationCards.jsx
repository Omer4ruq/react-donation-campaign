import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const DonationCards = () => {
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => setDonation(data));
  });
  return (
    <div className="grid grid-cols-4 gap-4">
      {donation.map((donation) => (
        <DonationCard key={donation.id} donation={donation}></DonationCard>
      ))}
    </div>
  );
};

export default DonationCards;

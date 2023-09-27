import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

import { useEffect, useState } from "react";

import { getStoredDonation } from "../../utility/localstorage";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const radian = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * radian);
  const y = cy + radius * Math.sin(-midAngle * radian);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Pchart = () => {
  const [donationGiven, setDonationGiven] = useState([]);
  useEffect(() => {
    const donationIds = getStoredDonation();
    console.log(donationIds.length + "donationID");
    setDonationGiven(donationIds);
  }, []);

  const dbData = useLoaderData();
  const donationLength = donationGiven.length;
  console.log(donationLength + "uyt");
  const dbLentgh = dbData.length;
  console.log(dbLentgh + "dbl");

  const data = [
    { name: "Group A", value: donationLength },
    { name: "Group B", value: dbLentgh },
  ];

  return (
    <div>
      <PieChart width={400} height={600}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default Pchart;

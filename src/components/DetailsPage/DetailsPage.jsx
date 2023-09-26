// import { useLoaderData, useParams } from "react-router-dom";

import { Link } from "react-router-dom";

const DetailsPage = ({ donate }) => {
  // const donates = useLoaderData();

  // const { id } = useParams();
  // const idInt = parseInt(id);
  // const donate = donates.find((donate) => donate.id == idInt);
  // console.log(donate);
  const { picture, category, title, price, id, description } = donate;

  return (
    // <div>
    //   <div className="card w-full h- bg-base-100 shadow-xl relative">
    //     <figure>
    //       <img className="w-8/12" src={picture} alt="Shoes" />
    //     </figure>
    //     <div className="bg-black bg-transparent">
    //       <button

    //         className="btn bg-red-500 border-none ml-72 mb-52 -mt-20 absolute"
    //       >
    //         Donation: {price}
    //       </button>

    //       <div className="card-body ml-48">
    //         <h1 className="text-4xl font-bold">{category}</h1>
    //         <p className="text-xs">{description}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <li key={donate.id}>
        <div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={picture} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{category}</h2>
              <h1>{title}</h1>
              <h1>{price}</h1>
              <div className="card-actions">
                <Link to={`/listcard/${id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default DetailsPage;

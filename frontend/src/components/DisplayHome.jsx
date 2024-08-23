import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import Albumitem from "./Albumitem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((item, index) => (
            <Albumitem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4 ">
        <h1 className="my-5 font-bold text-2xl">Todays biggest hits</h1>
        <div className="flex overflow-auto "></div>
      </div>
    </>
  );
};

export default DisplayHome;

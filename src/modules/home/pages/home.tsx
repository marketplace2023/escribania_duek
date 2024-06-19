import StepFlow from "../components/StepFlow";
import SwipperCategories from "../components/SwipperCategories";
import SwipperHome from "../components/SwipperHome";

const Home = () => {
  return (
    <>
      <div>
        <SwipperHome />
      </div>
      <div className="container">
        <StepFlow />
      </div>
      <div>
        <SwipperCategories />
      </div>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import { TopBarComponent } from "../components";

const Home: NextPage = () => {
  return (
    <div className="container">
      <TopBarComponent />
    </div>
  );
};

export default Home;

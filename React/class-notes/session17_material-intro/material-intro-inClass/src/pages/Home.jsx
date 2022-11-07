import AppbarComp from "../components/AppbarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";

const Home = () => {
  return (
    <>
      <AppbarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </>
  );
};

export default Home;

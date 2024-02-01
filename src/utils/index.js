import Footer from "../components/footer";
import Header from "../components/header";

export const PageWithHeader = ({ component }) => {
  return (
    <>
      <Header />
      {component}
      <Footer />
    </>
  );
};

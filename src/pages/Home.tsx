import Button from "../components/Button";
import Logo from "../components/Logo";
import NavbarWrapper from "../components/NavbarWrapper";

const Home = () => {
  return (
    <div>
      <NavbarWrapper>
        <div className="m-auto w-2/3 py-4 flex items-center justify-between">
          <Logo />
          <Button label="Connect Wallet" action={() => {}} />
        </div>
      </NavbarWrapper>
    </div>
  );
};

export default Home;

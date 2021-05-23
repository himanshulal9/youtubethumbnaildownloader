import { Fragment } from "react";
import Navbar from "./components/navbar";
import DownloadLinkComponent from "./components/DownloadLinkComponent";
import HowToComponent from "./components/HowToComponent";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar /> <DownloadLinkComponent /> <HowToComponent /> <Footer />
    </Fragment>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import ClockSlogan from "../components/Clock";
import CurrentTime from "../components/CurrentTime";
import Heading from "../components/Heading";
function App() {
  return (
    <center>
      <Heading></Heading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;

import Button from "./common/Button";
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
body{
  /* background:white; */
  min-height: 100vh;
  margin: 0;
  color:white;
  font-family: 'Lobster' , 'sans-seriff';


}





`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <h1>Web Design</h1>
      <Button>Log IN</Button>
    </div>
  );
}

export default App;

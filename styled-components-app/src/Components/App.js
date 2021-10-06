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
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <GlobalStyle/>
      <h1>Web Design</h1>
      <Button secondary>Secondary</Button>
      <Button>Log IN</Button>
      <Button large>Lg Prop</Button>
      <Button disabled>Log IN -disabled</Button>



    </div>
  );
}

export default App;

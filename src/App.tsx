import Button from "./components/Button/Button";
import { ThemedButton } from "./components/Button/ThemedButton";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";

function App() {
  return (
    <div className="App">
      <Button
        btnBgColor="violet"
        btnTxtColor="white"
        btnHeight="30px"
        btnWidth="150px"
        btnBorderRadius="10px"
        btnBorder="solid"
        btnBorderColor="black"
        btnBorderWidth="2px"
        btnTxtlabel="Press Me"
        onClick={() => console.log("You clicked on Violet coloured Button!")}
      />

      <br />
      <br />

      <ThemedButton
        primary={true}
        btnHeight="50px"
        btnWidth="150px"
        btnBorderRadius="10px"
        btnBorder="solid"
        btnBorderColor="black"
        btnBorderWidth="2px"
        onClick={() => console.log("You clicked on a Primary Button!")}
      >
        Primary Button
      </ThemedButton>

      <br />
      <br />

      <ThemedButton
        primary={false}
        btnHeight="50px"
        btnWidth="150px"
        btnBorderRadius="10px"
        onClick={() => console.log("You clicked on a Non-Primary Button!")}
      >
        Non-Primary Button
      </ThemedButton>

      <br />
      <br />

      <ButtonGroup buttons={[{ label: "Button 1" }, { label: "Button 2" }]} />
    </div>
  );
}

export default App;

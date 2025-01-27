import SetData from "./Contexts/SetData";
import AuthController from "./Router/AuthController";

const App = () => {
      SetData();
      return <AuthController />;
};

export default App;

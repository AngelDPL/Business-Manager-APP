import { HomePage } from "../pages/HomePage/HomePage";
import { StoreProvider } from "../store/StoreContext";

export const App = () => {
  return (
    <StoreProvider>
      <div className="App">
        <HomePage />
      </div>
    </StoreProvider>
  );
};

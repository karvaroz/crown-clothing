import CategoryContainer from "./components/categoryContainer/CategoryContainer";
import { categories } from "./components/categoryItem/categories";

const App = () => {
  return (
    <CategoryContainer categories={categories}/>
  );
};

export default App;

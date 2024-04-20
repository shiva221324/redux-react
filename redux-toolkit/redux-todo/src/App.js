import Todo from "./components/Todo";
import Completed from "./components/Completed";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

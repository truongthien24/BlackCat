import "./App.css";
import { useSelector } from "react-redux";
import { MainRoutes } from "./Router/router";
import { Loading } from "./component/Loading/Loading";
import "antd/dist/reset.css";
import { Toaster } from "react-hot-toast";
// import "@ant-design/flowchart/dist/index.css";

function App() {
  const { statusLoading } = useSelector((state) => state.home);

  return (
    <div className="App">
      {statusLoading && <Loading />}
      <MainRoutes />
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
    </div>
  );
}

export default App;

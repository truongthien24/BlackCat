import "./App.css";
import { useSelector } from "react-redux";
import { MainRoutes } from "./Router/router";
import { Loading } from "./component/Loading/Loading";
import "antd/dist/reset.css";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
// import "@ant-design/flowchart/dist/index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
  },
});

function App() {
  const { statusLoading } = useSelector((state) => state.home);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {statusLoading && <Loading />}
        <MainRoutes />
        <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

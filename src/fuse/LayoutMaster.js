import { Loading } from "component/Loading/Loading";
import React from "react";
import { Toaster } from "react-hot-toast";
import { LoadingProvider } from "./LoadingProvider";

const LayoutMaster = ({ component }) => {
    return (
        <LoadingProvider>
            <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
            {component}
            <Loading />
        </LoadingProvider>
    );
};

export default LayoutMaster;

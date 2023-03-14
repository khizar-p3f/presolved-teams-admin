import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import { Router } from "@gatsbyjs/reach-router";
import { Amplify } from "aws-amplify";
import oldAwsConfig from "./aws-exports";
import Suspence from "./widgets/suspence";
import { Provider } from "react-redux";
import { store } from "./store";

import AppGlobal from "./widgets/global";
import { globalTheme } from "./globals/style";
import { ConfigProvider, theme } from "antd";
import ClientSignupPage from "./signup";
import SuperAdminIndexPage from "./super-admin";

const AdminPage = React.lazy(() => import("./admin/index"));
const root = document.getElementById("root");
Amplify.configure(oldAwsConfig);
new AppGlobal()

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<Suspence />}>
            <ConfigProvider theme={{algorithm: theme.defaultAlgorithm,token:globalTheme.token}}  prefixCls={globalTheme.prefixCls} >
                <Router basepath="/">
                    <AdminPage path="/*" />
                    <ClientSignupPage path="/signup/*"/>
                    <SuperAdminIndexPage path="/admin/*"/>
                </Router>
            </ConfigProvider>
        </Suspense>
    </Provider>,
    root
);

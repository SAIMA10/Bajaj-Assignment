import React from "react";
import App from "./App";
import {name as appName} from './app.json';
import { AppRegistry } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppComponent = () => (
    <QueryClientProvider client={queryClient}>      
        <App />
    </QueryClientProvider>
);

AppRegistry.registerComponent(appName, () => AppComponent);


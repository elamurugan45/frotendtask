import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { ConfigProvider } from "antd";
import { client } from "./apollo";
import { AppRouting } from "./routing/routing";

function App() {
  return (
    <ConfigProvider theme={{ hashed: false }}>
      <ApolloProvider client={client}>
        <AppRouting />
      </ApolloProvider>
    </ConfigProvider>
  );
}

export default App;

import React from "react";
import { render } from "react-dom";
import { AuthProvider } from "@asgardeo/auth-react";
import App from "./App"

const Index = () => (
    <AuthProvider
    config={ {
      signInRedirectURL: "http://localhost:3000/",
      signOutRedirectURL: "http://localhost:3000/",
      clientID: "DZhwlrwVjJ_HmAwWaIOH3lFfYM0a",
      baseUrl: "https://api.asgardeo.io/t/caerus",
      scope: [ "openid","profile" ]
  } }
    >
        { /* Rest of your application.  */ 
          <App/>
        }
    </AuthProvider>
);

render((<Index />), document.getElementById("root"));

import React from "react";
import { AuthProvider } from "./AuthContext";
import UserProfile from "./UserProfile";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <UserProfile />
      </div>
    </AuthProvider>
  );
}

export default App;
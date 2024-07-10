import React from "react";
// import RegistrationForm from "./components/RegistrationForm";
// import { ThemeProvider } from "./context/ThemeContext";
// import ThemeToggleButton from "./components/ThemeToggleButton";
// import ThemeComponent from "./components/ThemeComponent";
// import FetchDataButton from "./components/FetchDataButton";
// import ProductList from "./components/ProductList";
// import FocusInput from "./components/FocusInput";
// import TodoList from "./components/TodoList";
// import ItemList from "./components/ItemList";
// import OrderList from "./components/OrderList";
// import CountdownTimer from "./components/CountdownTimer";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ProtectedComponent from "./components/ProtectedComponent";

const App = () => (
  // <div>
  //   <h1>Registration Form</h1>
  //   <RegistrationForm />
  // </div>

  // <ThemeProvider>
  //   <div>
  //     <h1>Theme Toggle App</h1>
  //     <ThemeToggleButton />
  //     <ThemeComponent />
  //   </div>
  // </ThemeProvider>

  // <div>
  //   <h1>Event Handling</h1>
  //   <FetchDataButton />
  // </div>

  // <div>
  //   <h1 align="center">Product Search</h1>
  //   <ProductList />
  // </div>

  // <div>
  //   <h1 align="center">Chat Application</h1>
  //   <FocusInput />
  // </div>

  // <div>
  //   <h1 align="center">To-Do List app</h1>
  //   <TodoList />
  // </div>

  // <div>
  //   <h1 align="center">List of Items</h1>
  //   <ItemList />
  // </div>

  // <div>
  //   <h1>Order Summary</h1>
  //   <OrderList />
  // </div>

  // <div>
  //   <h1 align="center">Countdown Timer App</h1>
  //   <CountdownTimer />
  // </div>/
  <center>
    <AuthProvider>
      <div>
        <h1>Authentication App</h1>
        <Login />
        <Logout />
        <ProtectedComponent />
      </div>
    </AuthProvider>
  </center>
);

export default App;
import LoginPage from "./components/login";
import ProfilePage from "./components/profile";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div
        style={{
          backgroundColor: "red",
          width: "95%",
          maxWidth: "400px",
          textAlign: "center",
          padding: "24px 0px",
          borderRadius: "24px",
          color: "white",
          margin: "150px auto",
        }}
      >
        <h1>context API</h1>
        <LoginPage />
        <ProfilePage />
      </div>
    </UserContextProvider>
  );
}

export default App;

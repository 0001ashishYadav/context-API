import LoginPage from "./components/Login";
import ProfilePage from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

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

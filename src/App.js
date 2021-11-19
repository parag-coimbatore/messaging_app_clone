import Messenger from "./components/Messenger";
import AccountProvider from "./contacts/AccountProvider";


function App() {
  return (
    <>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar';
// import SecondSidebar from './Component/SecondSidebar'; // Remove this line if not needed

function App() {
  return (
    <>
      <Sidebar />
      {/* <SecondSidebar /> */}
      {/* ^ Uncomment this line if you actually need to use it */}
    </>
  );
}

export default App;

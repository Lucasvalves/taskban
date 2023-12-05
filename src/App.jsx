import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { Modal } from './components/Modal';
function App() {
  return (
    <div className="bg-violet-50 h-screen w-screem flex">
      <SideBar />
      <div className="w-5/6 flex flex-col">
        <NavBar />
        <Modal />
      </div>
    </div>
  );
}

export default App;

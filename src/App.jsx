import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { Modal } from './components/Modal';
import AppProvider from './context/AppProvider';
import useAppContext from '../src/hook/useAppContext';
import PickData from './PickData/PickData';

function App() {
  const { openModal, setOpenModal } = useAppContext();
    return (
      <AppProvider>
        <div className="bg-violet-50 h-screen w-screem flex">
          <SideBar />
          <div className="w-5/6 flex flex-col">
            <NavBar />
            <Modal />
          </div>
    
        </div>
      </AppProvider>
    );
  
}

export default App;

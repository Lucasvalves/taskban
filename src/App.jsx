import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { Modal } from './components/Modal';
import AppProvider from './context/AppProvider';
import useAppContext from '../src/hook/useAppContext';
import PickData from './PickData/PickData';


function App() {
  const { setIsModalVisible  } = useAppContext();

    return (
      <AppProvider>
           <div className="bg-violet-50 h-screen w-screem flex">
      {/* <div className="bg-black-200 z-10 flex absolute w-full h-screen"> */}

            <div className="w-5/6 flex flex-col">
            <SideBar />

              <NavBar />           
              <Modal />                
          </div>
          </div>
          

      </AppProvider>
    );
  
}

export default App;

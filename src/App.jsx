import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { Modal } from './components/Modal';
import ModalProvider from './context/ModalProvider';
import TaskProvider from './context/TaskProvider';
import SidebarContext from './context/SidebarProvider';
import { TaskContainer } from './components/TaskContainer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
      <TaskProvider>
        <ModalProvider>
          <SidebarContext>
            <NavBar />
            <div className="bg-violet-50 h-screen w-screem flex">
              <div className="w-full flex flex-row h-screen ">
                <SideBar />
                <TaskContainer />
                <Modal />
              </div>
            </div>
            <Toaster position='top-right'/>
          </SidebarContext>
        </ModalProvider>
      </TaskProvider> 
  );
}

export default App;
//overflow-hidden
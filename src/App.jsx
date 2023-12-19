import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { Modal } from './components/Modal';
import ModalProvider from './context/ModalProvider';
import TaskProvider from './context/TaskProvider';
import { TaskContainer } from './components/TaskContainer';

function App() {
  return (
    <TaskProvider>
      <ModalProvider>
        <div className="bg-violet-50 h-screen w-screem flex">
          <div className="w-full flex flex-row h-screen">
            <SideBar />
            <NavBar />
            <TaskContainer />
            <Modal />
          </div>
        </div>
      </ModalProvider>
    </TaskProvider>
  );
}

export default App;

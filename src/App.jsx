import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { Modal } from './components/Modal';
import ModalProvider from './context/ModalProvider';
import TaskProvider from './context/TaskProvider';
import { TaskContainer } from './components/TaskContainer';

<<<<<<< HEAD

function App() {
  return (
      <TaskProvider>
        <ModalProvider>
          <NavBar />
          <div className="bg-violet-50 h-screen w-screem flex  ">
            <div className="w-full flex flex-row h-screen ">
              <SideBar />
              <TaskContainer />
              <Modal />
            </div>
          </div>
        </ModalProvider>
      </TaskProvider>
=======
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
>>>>>>> feab60f55a1bbc719f5145259c6746fd228422ab
  );
}

export default App;

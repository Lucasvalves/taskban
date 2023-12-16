import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { Modal } from './components/Modal';
import AppProvider from './context/AppProvider';
import useAppContext from '../src/hook/useAppContext';
import { TaskContainer } from './components/TaskContainer';


function App() {

    return (
      <AppProvider>
        <div className="bg-violet-50 h-screen w-screem flex">
  
          <div className="w-full flex flex-row h-screen">
            <SideBar />
            <NavBar /> 
            <TaskContainer/>
            <Modal />                
          </div>
        </div>
      </AppProvider>
    );
  
}

export default App;

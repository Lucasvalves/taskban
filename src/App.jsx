import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { Modal } from './components/Modal';
import AppProvider from './context/AppProvider';
import useAppContext from '../src/hook/useAppContext';
import { TaskCard } from './components/Task';


function App() {

    return (
      <AppProvider>
        <div className="bg-violet-50 h-screen w-screem flex">
  
          <div className="w-full flex flex-row h-screen">
            <SideBar />
            <NavBar /> 
            <div className="flex items-center mx-12 gap-6
            6 w-full h-screen">
              <TaskCard taskName="To do" className="flex-auto w-20"/>
              <TaskCard taskName="Doing" className="flex-auto w-32"/> 
              <TaskCard taskName="QA" className="flex-auto w-32"/> 
              <TaskCard taskName="Done" className="flex-auto w-32"/> 
               
            </div>
            <Modal />                
          </div>
        </div>
      </AppProvider>
    );
  
}

export default App;

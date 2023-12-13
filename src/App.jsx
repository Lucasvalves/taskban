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
  
          <div className="w-full flex flex-row h-screen bg-orange-100">
            <SideBar />
            <NavBar /> 
            <div className="flex flex-col w-full bg-green-400">
              <TaskCard taskName="To do"/>
              <TaskCard taskName="Doing"/> 
              <TaskCard taskName="QA" /> 
               
            </div>

            <Modal />                
          </div>
        </div>
      </AppProvider>
    );
  
}

export default App;

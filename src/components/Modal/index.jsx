import useAppContext from '../../hook/useAppContext'
import Form from '../Form'
export const Modal = () => {
  const { isModalVisible , setIsModalVisible  } = useAppContext()

  const handleOutsideClick = (e) =>{
    if(e.target.id === "modal")setIsModalVisible(false);   
  }
  if (isModalVisible ) {
    return (
      <div id="modal" className="bg-black-200 z-20 flex items-center justify-center absolute w-full left-0 top-0 h-screen" onClick={handleOutsideClick}>
        <div className="bg-white  rounded-md m-auto h-12/12 w-5/12 ">
          <div className=" h-5/6 flex my-5  w-6/6 flex-col m-8">
            <h1 className="text-purple-950 font-semibold text-xl mb-3">Novo Card</h1>
            <div>
              <Form/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

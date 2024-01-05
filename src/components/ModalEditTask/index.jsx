import useModalContext from '../../hook/useModalContext'
import FormEditTask from '../FormEditTask'

export const ModalEditTask = () => {
  const { isModalEditVisible , setIsModalEditVisible  } = useModalContext()

  const handleOutsideClick = (e) =>{
    if(e.target.id === "modal")setIsModalEditVisible(false);   
  }
  if (isModalEditVisible) {
    return (
     <div id="modal" className="bg-black-200 z-50 flex items-center justify-center absolute w-full left-0 top-0 h-screen" onClick={handleOutsideClick}>
        <div className="bg-white  rounded-md m-auto h-12/12 w-10/12 2xl:w-4/12 sm:w-9/12 lg:w-2/5  ">
          <div className=" h-5/6 flex my-5  w-6/6 flex-col m-4 sm:m-8">
            <h1 className="text-purple-950 font-semibold text-xl mb-3">Edit Card</h1>
            <div>
              <FormEditTask/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

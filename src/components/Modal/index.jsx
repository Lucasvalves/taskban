import useAppContext from '../../hook/useAppContext'
import Form from '../Form'
export const Modal = () => {
  const { openModal, setOpenModal } = useAppContext()

  if (openModal == true) {
    return (
      <div className="bg-black-200 flex  h-full">
        <div className="bg-white  h-4/6 rounded-md m-auto w-3/6">
          <div className=" h-5/6 flex  m-5 w-6/6 flex-col">
            <h1 className="text-purple-950 font-semibold text-base mb-3">Novo Card</h1>
            <div>
              <Form/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import { BsCalendar2Event, BsListUl } from 'react-icons/bs';
import useAppContext from '../../hook/useAppContext';

export const Form = () => {
  const { openModal, setOpenModal } = useAppContext();
  return (
    <form action="">
      <div className="flex flex-col">
        <input type="name" className="mb-5 border border-gray-20 rounded" placeholder='Digite aqui o título da task'/>
        <textarea
          name=""
          id=""
          cols="30"
          rows="3"
          placeholder='Digite a descrição'
          className="mb-5 border border-gray-200 resize-none rounded"
        ></textarea>

        <input type="date" name="" id="" placeholder='Selecione a data de entrega' className="border border-gray-200">

        </input>
      </div>
      <div className="bg-violet-50 w-full h-1/6 ">
        <button
          onClick={() => setOpenModal(false)}
          className="text-red-400 border border-red-400 rounded-lg "
        >
          Cancelar
        </button>
        <button
          //onClick={() => setOpenModal(false)}
          className="bg-purple-950 text-white border rounded-lg "
        >
          Criar
        </button>
      </div>
    </form>
  );
};

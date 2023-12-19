//import { BsCalendar2Event, BsListUl } from 'react-icons/bs';
import useModalContext from '../../hook/useModalContext';
import Button from '../Button';
import { useForm } from 'react-hook-form';
import PickData from '..//icons/PickData/PickData';
import TextField from '../TextField';
import TextArea from '../TextArea';
import { InputRadio } from '../InputRadio';
import { useTasks } from '../../hook/useTasks';

const Form = () => {

  const {addTask} = useTasks();

  const { setIsModalVisible, setOpenToDo } = useModalContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    //console.log(e);
    addTask(e);
    setIsModalVisible(false);
    setOpenToDo(true);
  };

  return (
    <form className="w-12/12" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <div className="flex flex-col mb-5  h-10">
          <TextField
            register={register('title')}
            label="Título da Task"
            name="title"
            type="text"
            className=" border border-gray-20 rounded  text-sm p-1.5 w-full"
            placeholder="Digite aqui o título da task"
          />
        </div>
        <TextArea
          register={register('description')}
          placeholder="Digite a descrição"
          name="description"
          label="Descrição"
          className="mb-3 border border-gray-200 resize-none rounded w-full text-sm "
        />
        <div className="mb-6  flex flex-col   sm:gap-20 lg:gap-0 xl:gap-16 sm:flex-row gap-4">
          <span className="flex flex-col w-4/4 sm:w-2/4">
            <TextField
              type="text"
              name="completionDate"
              label="Data final"
              placeholder="Selecione a data de entrega"
              icon={<PickData />}
              register={register('date')}
              className="border border-gray-200 rounded text-sm p-1.5  w-full box-border cursor-pointer
							"
            />
          </span>
          <span className="w-4/4 sm:w-2/4  ">
            <span className="flex flex-col   w-full gap-0.5 ">
              <label className="text-xs text-gray-200  2xl:w-3/6  2xl:ml-2">
                Priority
              </label>
              <div className="flex gap-2 sm:gap-3  md:flex-row  sm:justify-end  ">
                <InputRadio
                  register={register('priority')}
                  value="high"
                  className=" bg-red-400 text-white text-xs p-0.5 px-3 sm:px-5 rounded-xl cursor-pointer"
                />
                <InputRadio
                  register={register('priority')}
                  value="medium"
                  className="border border-orange-100  text-orange-100 bg-white text-xs p-0.5 px-3 sm:px-6 rounded-xl cursor-pointer"
                />
                <InputRadio
                  register={register('priority')}
                  value="low"
                  className="border border-green-400 text-green-400 bg-white text-xs p-0.5 px-3 lg:px-3 sm:px-5 rounded-xl cursor-pointer"
                />
              </div>
            </span>
          </span>
        </div>
      </div>
      <div className=" w-full h-1/6 flex justify-center sm:justify-end gap-4">
        <Button
          text="CANCELAR"
          onClick={() => setIsModalVisible(false)}
          className="text-red-400 border  border-red-400 text-xs w-2/5 sm:w-1/4 p-1"
        />
        <Button
          type="submit"
          text="CRIAR"
          className="bg-purple-950 text-white border text-xs w-2/5 sm:w-1/4 p-1"
        />
      </div>
    </form>
  );
};
export default Form;

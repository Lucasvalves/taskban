//import { BsCalendar2Event, BsListUl } from 'react-icons/bs';
import useModalContext from '../../hook/useModalContext';
import Button from '../Button';
import TextField from '../TextField';
import TextArea from '../TextArea';
import { InputRadio } from '../InputRadio';
import { useTasks } from '../../hook/useTasks';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PickData from '../icons/PickData/PickData';
import toast from 'react-hot-toast';

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  priority: z.string(),
  date: z.coerce.date(),
});

const Form = () => {
  const { addTask  } = useTasks();
  const { setIsModalVisible, setIsSubmit, isSubmit } = useModalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    addTask(data);
    setIsModalVisible(false);
    toast.success("Sucesso!", {
      icon: '👏',
    });
    //console.table(data)
  };

  return (
    <form className="w-12/12" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <div className="flex flex-col mb-5  h-10">
          <TextField
            error={!!errors.title}
            register={register('title')}
            label="Título da Task"
            className={`border border-gray-20 rounded font-medium text-xs  2xl:text-sm p-1.5 w-full ${!!errors.title && isSubmit == true ? " border-red-400 " : "focus:border-neutral-400 focus:outline-none focus:ring-[#C4C4C4]"} `}
            placeholder="Digite aqui o título da task"
          />
        </div>
        <TextArea
          error={!!errors.description}
          register={register('description')}
          placeholder="Digite a descrição"
          label="Descrição"
          className={`border p-1.5  border-gray-200 resize-none rounded font-medium w-full text-xs  2xl:text-sm ${!!errors.title && isSubmit == true ?" border-red-400 ": "focus:border-neutral-400 focus:outline-none"}`}
        />
        <div className="mb-6 flex flex-col sm:gap-10 lg:gap-6 xl:gap-12' sm:flex-row gap-4">
          <span className="flex flex-col w-4/4 sm:w-2/4">
            <TextField

              error={!!errors.date}
              register={register('date')}
              type="date"
              label="Data final"
              placeholder="Selecione a data de entrega"
              icon={<PickData />}
              className={`border border-gray-200 rounded font-medium text-xs  2xl:text-sm p-1.5  w-full box-border cursor-pointer ${!!errors.title && isSubmit == true ? " border-red-400 ":"focus:border-neutral-400 focus:outline-none focus:ring-[#C4C4C4]"}`}
						
            />
          </span>
          <span className="w-4/4 sm:w-2/4  ">
            <span className="flex flex-col  w-full gap-0.5">
              <label className="text-xs text-gray-200 2xl:w-3/6 sm:mt-1.5 2xl:ml-2 ">
                Priority
              </label>
              <div className="flex gap-2 sm:gap-3 lg:gap-1 xl:gap-3 md:flex-row  sm:justify-end ">
                <InputRadio
                  register={register('priority')}
                  value="high"
                  className=" bg-red-400 uppercase text-white text-xs p-0.5 px-3 sm:px-4 lg:px-3 xl:px-4 rounded-xl cursor-pointer"
                />
                <InputRadio
                  register={register('priority')}
                  value="medium"
                  className="border uppercase border-orange-100  text-orange-100 bg-white text-xs p-0.5 px-3 lg:px-2 xl:px-4 rounded-xl cursor-pointer"
                />
                <InputRadio
                  register={register('priority')}
                  value="low"
                  className="border uppercase border-green-400 text-green-400 bg-white text-xs p-0.5 px-3 lg:px-2 sm:px-3 rounded-xl cursor-pointer"
                />
              </div>
              {!!errors.priority && (
                <p className="text-[11px] text-red-400">
                  Escolha uma prioridade
                </p>
              )}
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
          onClick={()=> setIsSubmit(true)}
        />
      </div>
    </form>
  );
};
export default Form;

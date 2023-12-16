//import { BsCalendar2Event, BsListUl } from 'react-icons/bs';
import useAppContext from '../../hook/useAppContext';
import Button from '../Button';
// import {useForm} from "react-hook-form"
import PickData from '..//icons/PickData/PickData';
import TextField from '../TextField';
import TextArea from '../TextArea';
import { useState } from 'react';
import { InputRadio } from '../InputRadio';

const Form = () => {
  const { setIsModalVisible, setOpenToDo } = useAppContext();
  //const {register, handleSubmit} = useForm()

  const handleSubmitData = (data) => {
    console.log('submit', data);
  };
  const handleFocus = (event) => {
    if (placeholder === 'Selecione a data de entrega')
      event.target.type = 'date';
  };
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOpenToDoChange = () => {
    setIsModalVisible(false);
    setOpenToDo(true);
  };
  // onSubmit={handleSubmit(handleSubmitData)}

  return (
    <form className="w-12/12">
      <div className="flex flex-col">
        <div className="flex flex-col mb-5  h-10">
          <TextField
            //{...register('title')}
            label="Título da Task"
            type="text"
            className=" border border-gray-20 rounded  text-sm p-1.5 w-full"
            placeholder="Digite aqui o título da task"
          />
        </div>
        <TextArea
          //{...register('description')}
          placeholder="Digite a descrição"
          label="Descrição"
          className="mb-3 border border-gray-200 resize-none rounded w-full text-sm "
        />
        <div className="mb-6  flex flex-row justify-between gap-10">
          <span className="flex flex-col w-1/2">
            <TextField
              type="text"
              name="completionDate"
              label="Data final"
              placeholder="Selecione a data de entrega"
              icon={<PickData />}
              //	{...register('date')}
              className="border border-gray-200 rounded text-sm p-1.5  w-full box-border
							"
              // value={taskData.completionDate ?? ''}
              // onChange={handleInputChange}
            />
          </span>
          <span className="w-2/4 mb-5">
            <label className="text-xs text-gray-200 w-4/5 ml-2">Priority</label>
            <span className="flex gap-3 justify-end ">
              <InputRadio
                onChange={handleRadioChange}
                selectedOption="selectedOption"
                value="high"
                className=" bg-red-400 text-white text-xs p-0.5 px-3 rounded-xl cursor-pointer"
              />
              <InputRadio
                onChange={handleRadioChange}
                selectedOption="selectedOption"
                value="medium"
                className="border border-orange-100  text-orange-100 bg-white text-xs p-0.5 px-3 rounded-xl cursor-pointer"
              />
              <InputRadio
                onChange={handleRadioChange}
                selectedOption="selectedOption"
                value="low"
                className="border border-green-400 text-green-400 bg-white text-xs p-0.5 px-3 rounded-xl cursor-pointer"
              />
            </span>
          </span>
        </div>
      </div>
      <div className=" w-full h-1/6 flex justify-end gap-4 ">
        <Button
          text="CANCELAR"
          onClick={() => setIsModalVisible(false)}
          className="text-red-400 border  border-red-400 text-xs w-1/4 p-1"
        />
        <Button
          type="submit"
          text="CRIAR"
          className="bg-purple-950 text-white border text-xs w-1/4 p-1"
          onClick={handleOpenToDoChange}
        />
      </div>
    </form>
  );
};
export default Form;

//import { BsCalendar2Event, BsListUl } from 'react-icons/bs';
import useAppContext from '../../hook/useAppContext'
import Button  from '../Button'
import {useForm} from "react-hook-form"
import PickData from '../../PickData/PickData'
import TextField from '../TextField'
import TextArea  from '../TextArea'

const Form = () => {
	const { openModal, setOpenModal } = useAppContext()
	const {register, handleSubmit} = useForm()
	
	const handleSubmitData = (data) =>{
		console.log("submit", data);
	}
	const handleFocus = (event) => {
    if (placeholder === 'Selecione a data de entrega') event.target.type = 'date';
  };
	return (
		<form onSubmit={handleSubmit(handleSubmitData)}>
			<div className="flex flex-col" >
				<div className="flex flex-col mb-3  h-10">
					<TextField
					{...register('title')}
						label="Título da Task"
						type="text"
						className="mb-5 border border-gray-20 rounded text-xs p-1 h-6 w-full"
						placeholder="Digite aqui o título da task"
					/>
				</div>
						<TextArea 
						{...register('description')}
							placeholder="Digite a descrição"
							label="Descrição"
							className="mb-5 border border-gray-200 resize-none rounded w-full text-xs "							
						/>
				<div className=" flex flex-row justify-between gap-5">
					<span className="flex flex-col w-1/2">
						<TextField
							type="text"
							name="completionDate"
							label="Data final"
							placeholder="Selecione a data de entrega"
							icon={<PickData />}
							{...register('date')}
							className="border border-gray-200 text-xs h-6 w-full
							"
											// value={taskData.completionDate ?? ''}
											// onChange={handleInputChange}
										/>
					</span>
					<span className="w-1/2 mb-5 " >
						<label className="text-xs  text-gray-200">Priority</label>  
					 	<span className="flex gap-4 ">
							<Button text="HIGH" className="border bg-red-400 text-white text-xs pl-2 pr-2" />
							<Button text="MEDIUM" className="border border-orange-100  text-orange-100 bg-white text-xs pl-2 pr-2"/>
							<Button text="LOW" className="border border-green-400 text-green-400 bg-white text-xs pl-2 pr-2" />
						</span>
					</span> 
				</div>
			</div>
			<div className=" w-full h-1/6 flex justify-end gap-4">
				<Button
					text="Cancelar"
					onClick={() => setOpenModal(false)}
					className="text-red-400 border border-red-400 text-xs pl-5 pr-5"
				/>

				<Button
				type="submit"
					text="Criar"
					className="bg-purple-950 text-white border text-xs pl-5 pr-5"
				/>
			</div>

		</form>
	)
}
export default Form
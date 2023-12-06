//import { BsCalendar2Event, BsListUl } from 'react-icons/bs';
import useAppContext from '../../hook/useAppContext'
import { Button } from '../Button'

export const Form = () => {
	const { openModal, setOpenModal } = useAppContext()
	return (
		<form action="">
			<div className="flex flex-col">
				<input
					type="name"
					className="mb-5 border border-gray-20 rounded"
					placeholder="Digite aqui o título da task"
				/>
				<textarea
					name=""
					id=""
					cols="30"
					rows="3"
					placeholder="Digite a descrição"
					className="mb-5 border border-gray-200 resize-none rounded"
				></textarea>

				<div className="container ">
				<span>
				<input
						type="date"
						name=""
						id=""
						placeholder="Selecione a data de entrega"
						className="border border-gray-200"
					></input>
				</span>

					<span className="container" >
					<label htmlFor="">Priority</label>

						<span className="flex gap-4">
						<Button text='HIGH' className="border bg-red-400 text-white text-xs p-6" />
						<Button text='MEDIUM' className="border border-orange-100  text-orange-100 bg-white text-xs"/>
						<Button text='LOW' className="border border-green-400 text-green-400 bg-white text-xs "/>
						</span>
					</span>

				</div>
			</div>
			<div className="bg-violet-50 w-full h-1/6 ">
				<Button
					text="Cancelar"
					onClick={() => setOpenModal(false)}
					className="text-red-400 border border-red-400  text-sm"
				/>

				<Button
					text="Criar"
					//onClick={() => setOpenModal(false)}
					className="bg-purple-950 text-white border text-sm "
				/>
			</div>
		</form>
	)
}

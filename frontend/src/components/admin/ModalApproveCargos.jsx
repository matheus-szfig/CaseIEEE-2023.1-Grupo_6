import { atom, useRecoilState } from "recoil";
import CancelBtn from "../profile/CancelButton";
import UseApi from "../../hooks/useApi";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const approveCargosModalShowAtom = atom({
	key: "approveCargosModalShow",
	default: false,
});

export const cargoApprovingAtom = atom({
	key: "cargoApprove",
	default: false,
});

export default function ModalApproveCargos({ text }) {
	const navigate = useNavigate();
	const api = useCallback(UseApi, [])();

	const [show, setShow] = useRecoilState(approveCargosModalShowAtom);
	const [cargo, setCargo] = useRecoilState(cargoApprovingAtom);

	async function approveCargo(e) {
		e.preventDefault();

		try {
			const prom = new Promise(async (exec, reject) => {
				try {
					const resp = await api.patch("/cargo/approve", cargo);

					if (!resp.data.status) {
						reject(resp.data.message);
					} else {
						exec(resp.data);
					}
				} catch (e) {
					reject(e.message);
				}
			});

			toast.promise(prom, {
				pending: "Aprovando...",
				success: "Cargo aprovado com sucesso!",
			});

			await prom;
			setTimeout(() => navigate(0), 1000);
		} catch (e) {
			toast.warning(e);
		}
	}

	return !!show ? (
		<>
			<div className="fixed top-0 left-0  w-screen h-screen z-10">
				<div
					className="absolute bg-black opacity-60 w-full h-full"
					onClick={() => {
						setShow(false);
						setCargo(false);
					}}
				></div>

				<div className="flex justify-center">
					<div
						id="modal-body"
						className="absolute w-[90vw] sm:w-[25rem] z-20 bg-white p-5 rounded mt-20"
					>
						<div
							id="modal-header"
							className="flex justify-between border-b w-[100%]"
						>
							<h3 className="font-bold text-primary text-2xl py-2">
								Aprovar Cargo
							</h3>
							<CancelBtn
								className="bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 my-1 px-3.5 outline outline-4 -outline-offset-4 outline-primary rounded"
								onClick={(e) => {
									e.preventDefault();
									setShow(false);
									setCargo(false);
								}}
							/>
						</div>
						<form className="mt-3 w-full flex flex-col" onSubmit={approveCargo}>
							<p className="text-md">{text}</p>
							<button
								className="mt-5 bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded"
								type="submit"
							>
								Aprovar
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	) : null;
}

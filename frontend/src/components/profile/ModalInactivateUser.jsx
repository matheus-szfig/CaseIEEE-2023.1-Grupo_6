import { atom, useRecoilState, useRecoilValue } from "recoil";
import CancelBtn from "./CancelButton";
import UseApi from "../../hooks/useApi";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authInfo } from "../Auth";

export const inactivateUserModalShowAtom = atom({
	key: "inactivateCargosModalShow",
	default: false,
});

export const userInactiveAtom = atom({
	key: "cargoRemoving",
	default: false,
});

export default function ModalInactivateCargos({ text }) {
	const navigate = useNavigate();
	const api = useCallback(UseApi, [])();
    const userInfo = useRecoilValue(authInfo)
	const [show, setShow] = useRecoilState(inactivateUserModalShowAtom);
	const [user, setUser] = useRecoilState(userInactiveAtom);

	async function InactivateUser(e) {
		e.preventDefault();

		try {
			const prom = new Promise(async (exec, reject) => {
				try {
					const resp = await api.delete(`/user/inactivate/${userInfo.id}`);

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
				pending: "Inativando...",
				success: "Usuário inativado com sucesso!",
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
						setUser(false);
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
							<h3 className="font-bold text-red-600 text-2xl py-2">
								Inativar Cargo
							</h3>
							<CancelBtn
								className="bg-gray-100 hover:bg-red-600 hover:text-white text-red-600 font-bold py-2 my-1 px-3.5 outline outline-4 -outline-offset-4 outline-red-600 rounded"
								onClick={(e) => {
									e.preventDefault();
									setShow(false);
									setUser(false);
								}}
							/>
						</div>
						<form className="mt-3 w-full flex flex-col" onSubmit={InactivateUser}>
							<p className="text-md">{text}</p>
							<button
								className="mt-5 bg-gray-100 hover:bg-red-600 hover:text-white text-red-600 font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-red-600 rounded"
								type="submit"
							>
								Inativar
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	) : null;
}

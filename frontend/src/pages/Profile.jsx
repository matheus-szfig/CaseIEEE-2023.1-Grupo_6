import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
	AuthComponent,
	authInfo as authInfoSelector,
	authReady,
} from "../components/Auth";
import {
	ActiveRole,
	DisabledRole,
	EmptyRole,
} from "../components/profile/Role/Index";
import PictureTab from "../components/profile/PictureTab";
import { useRecoilState, useRecoilValue } from "recoil";
import "../styles/Profile.css";
import { toast } from "react-toastify";
import EditBtn from "../components/profile/EditButton";
import CancelBtn from "../components/profile/CancelButton";
import useApi from "../hooks/useApi";
import ModalAddCargos from "../components/profile/ModalAddCargos";
import ModalRemoveCargos from "../components/profile/ModalRemoveCargos";
import ModalInactivateUser, {
	inactivateUserModalShowAtom,
} from "../components/profile/ModalInactivateUser";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	//recoil selectors
	const userInfo = useRecoilValue(authInfoSelector);
	const isReady = useRecoilValue(authReady);

	// not shared states
	const [cargos, setCargos] = useState([]);
	const [notify, setNotify] = useState(false);
	const [changePass, setChangePass] = useState(false);
	const [changeCargos, setChangeCargos] = useState(false);
	const [addCargos, setAddCargos] = useState(false);
	const [newPassword, setNewPassword] = useState({
		current: "",
		new: "",
		confirm: "",
	});

  const [_i, setInactivateUser] = useRecoilState(inactivateUserModalShowAtom)

	const navigate = useNavigate();

	const api = useCallback(useApi, [])();

	function InactivateAccount(e) {
    e.preventDefault()
    setInactivateUser(true)
  }

	function ToggleEditPass(e) {
		e.preventDefault();
		document.getElementById("changePassForm").classList.toggle("active");
		document.getElementById("spacer").classList.toggle("active");
		setChangePass(!changePass);
	}

	async function LoadResources() {
		if (!!userInfo.id) {
			setNotify(userInfo.notify);
			const userGet = await api.get(`/user/${userInfo.id}`);
			const userCargos = userGet.data.cargos.map((v) => ({
				...v,
				img: "https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg",
			}));

			// carrega os dados do usuário aqui
			setCargos(userCargos);
		}
	}

	function PasswordTest() {
		if (newPassword.new.length < 5) return "Senha menor que 5 caracteres!";
		if (newPassword.new !== newPassword.confirm)
			return "Senha e confirmação de senha não conferem!";
		return false;
	}

	async function SaveData(e) {
		e.preventDefault();
		const failPassTest = PasswordTest();
		if (failPassTest && !!changePass) {
			toast.warning(failPassTest);
			return;
		}

		let newInfo = { notify };

		try {
			if (!!changePass) newInfo["password"] = newPassword.new;
			const response = api.patch(`/user/update/${userInfo.id}`, newInfo);

			toast.promise(response, {
				success: "Atualizado com sucesso!",
			});

			await response;
			setTimeout(() => navigate(0), 1000);
		} catch (e) {
			console.log(e);
		}
	}



	function PassFormField(field, e, value = e.target.value) {
		if (e) e.preventDefault();
		const obj = { ...newPassword };
		obj[field] = value;
		setNewPassword(obj);
	}

	useEffect(() => {
		setNewPassword({
			current: "",
			new: "",
			confirm: "",
		});
	}, [changePass]);

	useEffect(() => {
		LoadResources();
	}, [isReady]);

	return (
		<AuthComponent redirect={"/login"}>
			<ModalInactivateUser text={"Deseja realmente desativar a sua conta?"} />
			<ModalAddCargos />
			<ModalRemoveCargos text="Realmente deseja remover esse cargo? Essa ação é permanente e caso adicione o cargo novamente, o administrador precisará aprovar." />
			<Navbar />
			<div className="mx-5 mt-10 sm:mx-[4.5rem]">
				<h1 className="text-3xl font-bold text-primary">Configurações</h1>
				<div className="mt-6 block md:flex">
					<PictureTab
						nome={userInfo.nome}
						img={
							"https://res.cloudinary.com/dz209s6jk/image/upload/v1667610815/Avatars/tvtjtfyahz9ut6cocvqp.jpg"
						}
					/>

					<div className="rounded border border-light-gray pt-7 px-10 shadow-md w-4/4 mt-5 md:mt-0 md:w-3/4 md:ms-5 mb-7">
						<form>
							<h1 className="text-3xl text-primary font-bold">Conta</h1>
							<div className="flex justify-between mt-5">
								<div className="flex flex-inline flex-col w-[100%] pe-5">
									<label
										className="text-md font-bold text-primary opacity-70"
										for="email"
									>
										Email
									</label>
									<input
										id="email"
										className="rounded border border-gray-300 w-[100%] h-10 p-2 bg-gray-100"
										autoComplete="email"
										name="email"
										type="text"
										disabled
										value={userInfo.email}
									/>
								</div>
								<div className="flex flex-inline flex-col w-[100%] ps-5">
									<label
										className="text-md font-bold text-primary opacity-70"
										for="senha"
									>
										Senha Atual
									</label>
									<div className="flex flex-inline w-[100%]">
										<input
											id="senha"
											className="rounded-s border border-gray-300 w-[100%] h-10 p-2 bg-gray-100"
											autoComplete="current-password"
											name="current-password"
											type="password"
											value={"0".repeat(10)}
											disabled
										/>
										{changePass ? (
											<CancelBtn
												className="bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded-e"
												onClick={ToggleEditPass}
											/>
										) : (
											<EditBtn
												className="bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-3 outline outline-4 -outline-offset-4 outline-primary rounded-e"
												onClick={ToggleEditPass}
											/>
										)}
									</div>
								</div>
							</div>

							<div id="changePassForm" className="flex justify-between mt-5">
								<div className="flex flex-inline flex-col w-[100%] pe-5">
									<label
										className="text-md font-bold text-primary opacity-70"
										for="email"
									>
										Nova Senha
									</label>
									<input
										value={newPassword.new}
										id="new-password"
										className="rounded border border-gray-300 w-[100%] h-10 p-2 bg-gray-100"
										autoComplete="new-password"
										name="new-password"
										type="text"
										onChange={(e) => PassFormField("new", e)}
									/>
								</div>
								<div className="flex flex-inline flex-col w-[100%] ps-5">
									<label
										className="text-md font-bold text-primary opacity-70"
										for="email"
									>
										Confirmar Senha
									</label>
									<input
										value={newPassword.confirm}
										id="confirm-password"
										className="rounded border border-gray-300 w-[100%] h-10 p-2 bg-gray-100"
										name="confirm-password"
										type="text"
										onChange={(e) => PassFormField("confirm", e)}
									/>
								</div>
							</div>

							<div id="spacer"></div>

							<div className="border-b border-gray-400"></div>

							<h1 className="text-3xl text-primary font-bold mt-7">Cargos</h1>
							<div className="flex flex-col justify-between mt-4 px-5 border-b pb-8 border-gray-400">
								{Array.from({ length: 3 }).map((_, i) => {
									return !cargos[i] ? (
										<EmptyRole />
									) : !cargos[i].aprovado ? (
										<DisabledRole
											active={cargos[i].active}
											id_usuario={userInfo.id}
											id_cargo={cargos[i].id_cargo}
											id_equipe={cargos[i].id_equipe}
											equipe={cargos[i].equipe}
											cargo={cargos[i].cargo}
											img={cargos[i].img}
										/>
									) : (
										<ActiveRole
											active={cargos[i].active}
											id_usuario={userInfo.id}
											id_cargo={cargos[i].id_cargo}
											id_equipe={cargos[i].id_equipe}
											equipe={cargos[i].equipe}
											cargo={cargos[i].cargo}
											img={cargos[i].img}
										/>
									);
								})}
							</div>

							<h1 className="text-3xl text-primary font-bold mt-7">
								Preferências
							</h1>
							<div className="flex justify-between mt-5 pb-8">
								<div class="flex items-center">
									<input
										id="default-checkbox"
										type="checkbox"
										onChange={(e) => setNotify(e.target.checked)}
										checked={notify}
										class="w-5 h-5 bg-gray-100 border-gray-300 rounded-full focus:ring-primary focus:color-primary focus:ring-2"
									/>
									<label
										for="default-checkbox"
										class="ml-2 text-md font-medium text-primary/70"
									>
										Receber atualizações por e-mail
									</label>
								</div>

								<button
									className="bg-gray-100 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-3 -outline-offset-4 outline-primary rounded"
									onClick={SaveData}
								>
									Salvar
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="flex flex-row-reverse">
					<button
						className=" bg-gray-100 hover:bg-red-600 hover:text-white text-red-600 font-bold py-2 px-4 outline outline-3 -outline-offset-4 outline-red-600 rounded mb-10"
						onClick={InactivateAccount}
					>
						Inativar
					</button>
				</div>
			</div>
		</AuthComponent>
	);
};

export default Profile;

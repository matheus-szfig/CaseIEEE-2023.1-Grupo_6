import { useRecoilState } from "recoil";
import CancelBtn from "../profile/CancelButton";
import { equipeSelected } from "./EquipesTab";
import { deleteUsersModalShowAtom, userDeleteAtom } from "../admin/ModalDeleteUser"


export default function MemberGeralComponent({ id, nome, ativo }) {
	const [selected, setSelected] = useRecoilState(equipeSelected);

  const [_rc, setDeletedUser] = useRecoilState(userDeleteAtom);
  const [_r, setDeletingUser] = useRecoilState(deleteUsersModalShowAtom);


  function DeleteUser (e, id_usuario) {
    e.preventDefault();
    setDeletingUser(true);
    setDeletedUser({id_usuario});
  }

	return (
		<div className={"mb-1 flex px-4 py-2 border rounded " + (ativo ? "bg-primary" : "bg-primary-light")}>
			<div className="flex w-[100%] h-[100%]">
				<div className="flex flex-col justify-center">
					<h4 className="text-xl font-medium text-white mt-1">{nome}</h4>
				</div>
			</div>
			<div className="flex flex-col justify-center  rounded ">
                <CancelBtn onClick={(e)=>DeleteUser(e, id)} className="bg-white hover:bg-gray-300 rounded w-6  font-bold hover:text-white text-primary" />
			</div>
		</div>
	);
}

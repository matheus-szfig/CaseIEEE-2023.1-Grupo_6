import { useCallback } from "react";
import EditBtn from "./EditButton";
import UseApi from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function PictureTab({ nome, img, id }) {
  const api = useCallback(UseApi, [])();
  const navigate = useNavigate();
  function UpdatePicture(e) {
    e.preventDefault();
  }

  function UpdatePicture(e) {
    e.preventDefault();
  }

  async function logout(e) {
    e.preventDefault();

    try {
      const response = api.post(`/user/logout`);

      toast.promise(response, {
        success: "Logout feito com sucesso!",
      });

      await response;
      setTimeout(() => navigate(0), 1000);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="w-4/4 md:w-1/4">
        <div className="rounded border border-light-gray  p-3 shadow-md ">
          <div className="flex justify-center">
            <img
              className="relative left-3 border rounded-full w-2/4 ms-5"
              src={img}
              alt=""
            />
            <span className="flex flex-col-reverse relative left-3">
              <EditBtn
                className="bg-gray/0 h-8 w-8 bg-white hover:bg-primary hover:text-white text-primary font-bold py-1.5 px-2 outline outline-3 -outline-offset-4 outline-primary rounded"
                onClick={UpdatePicture}
              />
            </span>
          </div>
          <div className="flex justify-center mt-5 pt-4 pb-2 border-t mx-5 border-gray-400">
            <h1 className="text-xl text-center text-primary font-bold">
              {nome.length > 18 ? nome.slice(0, 15) + "..." : nome}
            </h1>
          </div>
        </div>
        <button
          className=" w-[100%] mt-5 bg-white hover:bg-red-600 hover:text-white text-red-600 font-bold py-2 px-4 outline outline-3 -outline-offset-4 outline-red-600 rounded mb-10"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </>
  );
}

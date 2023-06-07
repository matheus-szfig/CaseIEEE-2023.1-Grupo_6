export default function InputSenhas ({onChange, type, name, id, placeholder, onClick, content}) {

    return (
        <div className="relative">
          <input onChange={onChange} type={type} name={name} id={id} placeholder={placeholder} className="w-[100%] h-[23%] p-2 border-2 focus:outline-none focus:shadow-none rounded-[4px]"/>
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer " onClick={onClick}>
            {content}
          </span>
        </div>
    )
  }
export default function ActiveRole ({cargo, equipe, id, img, active}) {

  function RemoveCargo (e) {
    e.preventDefault();
  }

  function EditCargo (e) {
    e.preventDefault();
  }

  return (
    <div className={`p-2 bg-primary rounded mt-1`}>
      <div className={`flex justify-between px-2`}>
        <div className='flex items-center'>
          <img className='border rounded-full h-12 me-3' src={img} />
          <div className='flex flex-col justify-center'>
            <h5 className='text-white font-medium text-lg'>{equipe}</h5>
            <h6 className='text-white text-md font-light'>{cargo}</h6>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <div>
            <button className='bg-white hover:bg-gray-300 rounded h-8 w-8 me-3' onClick={EditCargo}>E</button>
            <button className='bg-white hover:bg-gray-300 rounded h-8 w-8' onClick={RemoveCargo}>R</button>
          </div>
        </div>
      </div>
    </div>
  )
}
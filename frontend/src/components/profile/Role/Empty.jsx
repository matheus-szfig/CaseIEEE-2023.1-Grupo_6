export default function EmptyRole ({cargo, equipe, id, img, active}) {

  function AddRole (e) {
    e.preventDefault();
  }

  return (
    <div className={`p-2 bg-gray-500 rounded mt-1`}>
      <div className={`flex justify-between px-2 opacity-0`}>
        <div className='flex items-center'>
          <img className='border rounded-full h-12 me-3' />
          <div className='flex flex-col justify-center'>
            <h5 className='text-white font-medium text-lg'></h5>
            <h6 className='text-white text-md font-light'></h6>
          </div>
        </div>
      </div>
    </div>
  )
}
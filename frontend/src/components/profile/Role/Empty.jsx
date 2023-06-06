export default function EmptyRole () {

  function AddRole (e) {
    e.preventDefault();
  }

  return (
    <div className={`p-2 bg-gray-300 border border-gray-400 rounded mt-1`}>
      <div className={`flex justify-between px-2`}>
        <div className='flex items-center'>
          <button onClick={AddRole}>
            <img className='border rounded-full border-gray-400 h-12 w-12 bg-white me-3' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png'}/>
          </button>
          <div className='flex flex-col justify-center'>
          </div>
        </div>
      </div>
    </div>
  )
}
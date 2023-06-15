export default function PictureTab ({nome, img, id}) {

  function UpdatePicture (e){
    e.preventDefault();
  }

  return (
    <div className='rounded border border-light-gray h-[100%] p-3 shadow-md w-4/4 md:w-1/4'>
      <div className='flex justify-center relative'>
        <img className='relative left-3 border rounded-full w-2/4 ms-5' src={img}/>
        <span className='flex flex-col-reverse relative'>
          <button className='bg-gray/0 h-10 hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 outline outline-4 -outline-offset-4 outline-primary rounded'onClick={UpdatePicture}>
            E
          </button>
        </span>
      </div>
      <div className='flex justify-center mt-5 pt-4 pb-2 border-t mx-5 border-gray-400'>
        <h1 className='text-xl text-primary font-bold'>{nome.length > 18 ? nome.slice(0, 15)+'...' : nome}</h1>
      </div>
    </div>
  )
}
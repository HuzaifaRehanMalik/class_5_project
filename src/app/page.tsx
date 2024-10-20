export default function home (){
  return(
    <div>
      <nav className="flex bg-white w-full h-20 justify-center items-center gap-x-4">
        <div className="bg-blue-600 w-96 h-10 " ></div>
        <div className="bg-red-600 w-40 h-10  "></div>
        <div className="bg-gray-600 w-44 h-10  " ></div>
      </nav>
      <main>
        <div className="bg-green-700 w-full h-96 flex justify-center items-center gap-x-80">
          <div className="bg-slate-600 w-40 h-64 "></div>
          <div className="bg-slate-800 w-40 h-64"></div>
        </div>
      </main>
      <footer>
        <div className="bg-orange-600 w-full h-96 flex justify-center items-center gap-x-40">
          <div className="bg-emerald-800 w-40 h-64"></div>
          <div className="bg-yellow-500 w-40 h-64"></div>
          <div className="bg-purple-500 w-40 h-64"></div>
        </div>
      </footer>
    </div>

    
  )
}
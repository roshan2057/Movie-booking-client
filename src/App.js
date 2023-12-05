import card_model from "./pages/components.jsx/card";
function App() {
  return (
    <div>
<header className="bg-orange-500 text-3xl flex justify-between px-9 py-5">
 <div>
  Movies
 </div>
 <div>
  <a href="/login" className="mx-4">Login</a>
  <a href="/register" className="ml-4">Register</a>
 </div>
</header>
<h1 className="mt-9 pl-8 text-3xl">Top Movies</h1>


     <section className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap -m-4">
      
     
    
      
     
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full  hover:scale-105">
        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://cineplexmovie.com/Modules/CineUploadFiles/Movie/image/Animal_310x390_499364.jpg" />
        </a>
        <div>
          <h2 className="text-gray-900 title-font text-3xl py-2 font-medium text-center bg-orange-500 text-white">Animal</h2>
        </div>
      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full  hover:scale-105">
        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://cineplexmovie.com/Modules/CineUploadFiles/Movie/image/DuiKadam_310x390_844350.jpg" />
        </a>
        <div>
          <h2 className="text-gray-900 title-font text-3xl py-2 font-medium text-center bg-orange-500 text-white">Dui Kadam</h2>
        </div>
      </div>



      <div className="lg:w-1/4 md:w-1/2 p-4 w-full  hover:scale-105">
        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://cineplexmovie.com/Modules/CineUploadFiles/Movie/image/Salaar_310x390_545363.png" />
        </a>
        <div>
          <h2 className="text-gray-900 title-font text-3xl py-2 font-medium text-center bg-orange-500 text-white">Salaar</h2>
        </div>
      </div>



      <div className="lg:w-1/4 md:w-1/2 p-4 w-full  hover:scale-105">
        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://cineplexmovie.com/Modules/CineUploadFiles/Movie/image/HattiChhap_310x390_810682.png" />
        </a>
        <div>
          <h2 className="text-gray-900 title-font text-3xl py-2 font-medium text-center bg-orange-500 text-white">Hatti Chapp</h2>
        </div>
      </div>




      <div className="lg:w-1/4 md:w-1/2 p-4 w-full  hover:scale-105">
        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://cineplexmovie.com/Modules/CineUploadFiles/Movie/image/Animal_310x390_499364.jpg" />
        </a>
        <div>
          <h2 className="flex text-gray-900 title-font text-3xl py-2 font-medium text-center bg-orange-500 text-white">Aquaman and the Lost Kingdom</h2>
        </div>
      </div>
      
      
    </div>
  </div>
</section>
    </div>
  );
}

export default App;

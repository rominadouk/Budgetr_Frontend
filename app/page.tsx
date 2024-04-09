import Image from "next/image";
import homeImage from '../public/images/home-image.jpg'

export default function Home() {
  return (
    <main className="h-screen">
      <div className=" flex  flex-col h-full" style={{backgroundImage: `url(${homeImage.src})`, backgroundSize: 'cover', backgroundPosition:'27% 75%'}}> 
          <div className="mb-10 mt-32 text-center text-white">
            <h1 className="text-7xl">Budgetr</h1>
            <p className="text-lg italic">Saving Money Made Simple</p>
          </div>
          {/* Input Budget Info Module */}
          <div className="mx-7">
            <form className="flex flex-col bg-white px-5 py-7">
              <label>Budget Name</label>
              <input type='text' name='budget-name' className="border-black rounded-md h-10"></input>
              <label>Amount</label>
              <input type='text' name='budget-amount' className="border-black rounded-md h-10"></input>
              <label>Length</label>
              <input type='text' name='budget-length' className="border-black rounded-md h-10"></input>
            </form>
          </div>

      </div>

    </main>
  );
}

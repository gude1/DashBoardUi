import NavBar from "@/components/NavBar/NavBar";
//styleName: Text md/Normal;

function App() {
  return (
    <div>
      <NavBar />
      <div className="border-gray-900 mt-16 md:mt-0 min-h-[100px] md:ml-[17.5rem]">
        <section className="p-4 md:p-8">
          <h1 className="font-bold leading-8 font-inter text-color3 text-2xl">
            Settings
          </h1>
          <p className="font-normal text-base leading-6 font-inter mt-1 text-color4">
            Manage your team and preferences here.
          </p>
        </section>

        <section className="overflow-y-auto w-full flex border-y border-color2">
          {/* <div className="h-10 w-[100] border border-color2  rounded-[0px_8px_8px_0px]"> */}
          <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
            Mydetails
          </button>
          <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
            Profile
          </button>
          <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
            Password
          </button>
          <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
            Plan
          </button>
          <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
            Billing
          </button>
          <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
            Notifications
          </button>
          <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
            Integrations
          </button>
          <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
            Api
          </button>

          {/* </div> */}
        </section>

        <section className="p-4 md:p-8 mt-8">
          <h1 className="font-bold text-lg leading-8 font-inter text-color3">
            Payment method
          </h1>
          <p className="font-normal text-sm leading-6 font-inter mt-1 text-color4">
            Update your billing details and address.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;

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
          <button>Notifications</button>
          <button>Notifications</button>
          <button>Notifications</button>
          <button>Notifications</button>
          <button>Notifications</button>
          <button>Notifications</button>
          <button>Notifications</button>
          <button>Notifications</button>

          {/* </div> */}
        </section>
      </div>
    </div>
  );
}

export default App;

import NavBar from "@/components/NavBar/NavBar";
import Input from "@/components/Input/Input";
//styleName: Text md/Normal;

function App() {
  return (
    <div>
      <NavBar />
      <div className="border-gray-900 mt-16 md:mt-0 min-h-[100px] md:ml-[17.5rem] py-8">
        <section className="px-4 md:px-8">
          <h1 className="font-bold leading-8 font-inter text-color3 text-2xl">
            Settings
          </h1>
          <p className="font-normal text-base leading-6 font-inter mt-1 text-color4">
            Manage your team and preferences here.
          </p>
        </section>

        <section className="overflow-y-auto w-full md:px-8">
          <div className="border-y flex border-color2 md:w-fit md:border md:rounded-md mt-6 overflow-y-hidden">
            <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 cursor-pointer bg-white border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
              Mydetails
            </button>
            <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 cursor-pointer bg-white border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
              Profile
            </button>
            <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 cursor-pointer bg-white border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
              Password
            </button>
            <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 cursor-pointer bg-white border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
              Plan
            </button>
            <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 cursor-pointer bg-white border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
              Billing
            </button>
            <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 cursor-pointer bg-white border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
              Notifications
            </button>
            <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 cursor-pointer bg-white border-r border-color2 hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
              Integrations
            </button>
            <button className="flex p-2 font-inter text-sm leading-5 font-medium text-color7 cursor-pointer bg-white  hover:bg-color1 hover:font-bold hover:text-[#1D2939]">
              Api
            </button>
          </div>
        </section>

        <section className="px-4 md:px-8 mt-8">
          <h1 className="font-bold text-lg leading-8 font-inter text-color3">
            Payment method
          </h1>
          <p className="font-normal text-sm leading-6 font-inter mt-1 text-color4">
            Update your billing details and address.
          </p>
        </section>

        <section className="px-4 md:px-8 mt-5">
          <hr className="bg-[#EAECF0]" />
        </section>

        <section className="px-4 md:px-8 flex flex-col md:flex-row mt-6">
          <div>
            <h1 className="font-semibold text-sm leading-5 font-inter text-color7">
              Contact email
            </h1>
            <p className="font-normal text-sm leading-5 font-inter mt-1 text-color4">
              Where should invoices be sent?
            </p>
          </div>
          <div>
            <div className="flex mt-4 md:mt-0 md:ml-10 items-start">
              <input
                type={"radio"}
                className="rounded-full bg-white mt-[1px] w-4 h-4"
              />
              <div className="flex flex-col  ml-2">
                <span className="font-semibold leading-5 text-sm text-color7">
                  Send to my account email
                </span>
                <span className="text-color4 leading-5 text-sm">
                  olivia@untitledui.com
                </span>
              </div>
            </div>

            <div className="flex mt-4 md:ml-10 items-start">
              <input
                type={"radio"}
                className="rounded-full bg-white mt-[1px] w-4 h-4"
              />
              <div className="flex flex-col  ml-2">
                <span className="font-semibold leading-5 text-sm text-color7">
                  Send to my account email
                </span>
                <Input
                  parentClassName="mt-3 bg-white"
                  lefticon={
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3333 3.00001C18.3333 2.08334 17.5833 1.33334 16.6666 1.33334H3.33329C2.41663 1.33334 1.66663 2.08334 1.66663 3.00001M18.3333 3.00001V13C18.3333 13.9167 17.5833 14.6667 16.6666 14.6667H3.33329C2.41663 14.6667 1.66663 13.9167 1.66663 13V3.00001M18.3333 3.00001L9.99996 8.83334L1.66663 3.00001"
                        stroke="#667085"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

import { FunctionComponent, useCallback, useState } from "react";

const Santorini: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Please sync "Rome" to the project
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationConfig = {
    logo: {
      icon: "/frame.svg",
      text: "Tripit"
    },
    routes: [
      { name: "Home", icon: "/home-icon.svg", path: "/" },
      { name: "All trips", icon: "/all-trips-icon.svg", path: "/trips" },
      { name: "Travels", icon: "/travels-icon.svg", path: "/travels" },
      { name: "Rooms", icon: "/rooms-icon.svg", path: "/rooms" },
      { name: "Transport", icon: "/transport-icon.svg", path: "/transport" },
      { name: "Attractions", icon: "/attractions-icon.svg", path: "/attractions" },
    ],
    support: { name: "Support", icon: "/chat-help.svg", path: "/support" },
    newTrip: { name: "New trip", icon: "/icon.svg", path: "/new-trip" }
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="w-full relative rounded-2xl bg-ghostwhite h-[77.813rem] overflow-hidden text-left text-[1rem] text-gray font-h400">
      <div className="absolute top-[1.5rem] left-[1.5rem] rounded-2xl bg-white w-[18.25rem] h-[74.813rem]">
      {/* Hamburger menu for mobile */}
      <button onClick={toggleMenu} className="lg:hidden absolute top-4 left-4 z-20">
        ☰
      </button>

      {/* Logo */}
      <div className="absolute top-[2.188rem] left-[4.25rem] w-[9.813rem] h-[3.375rem] flex flex-col items-center justify-center text-[2.156rem]">
        <div className="w-[9.813rem] h-[3.438rem] flex flex-row items-center justify-start pt-[0.062rem] px-[0rem] pb-[0.125rem] box-border gap-[0.875rem]">
          <img
            className="w-[2.25rem] relative h-[2.625rem] overflow-hidden shrink-0"
            alt=""
            src={navigationConfig.logo.icon}
          />
          <b className="relative leading-[3.239rem]">{navigationConfig.logo.text}</b>
        </div>
      </div>

      {/* New trip button */}
      <div className="absolute h-[4.01%] w-[83.56%] top-[10.53%] right-[8.22%] bottom-[85.46%] left-[8.22%] shadow-[0px_8px_8px_rgba(52,_106,_255,_0.15)] rounded-2xl bg-mediumslateblue flex flex-col items-center justify-start py-[0.75rem] px-[2rem] box-border text-white">
        <div className="flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="relative leading-[1.5rem] font-semibold">
            {navigationConfig.newTrip.name}
          </div>
          <img
            className="w-[1.5rem] relative h-[1.5rem]"
            alt=""
            src={navigationConfig.newTrip.icon}
          />
        </div>
      </div>

      {/* Navigation links */}
      <nav className={`absolute top-[14.5rem] left-[1.5rem] w-[15.25rem] h-[23rem] flex flex-col items-center justify-start gap-[1rem] ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
        {navigationConfig.routes.map((route, index) => (
          <div key={index} className="w-[15.25rem] rounded-2xl bg-ghostwhite flex flex-row items-center justify-start py-[0.75rem] px-[1rem] box-border gap-[1rem]">
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
              alt=""
              src={route.icon}
            />
            <div className="relative leading-[1.5rem] font-semibold">{route.name}</div>
          </div>
        ))}
      </nav>

      {/* Support link */}
      <div className="absolute h-[4.01%] top-[94.65%] bottom-[1.34%] left-[1.5rem] rounded-2xl w-[15.25rem] flex flex-row items-center justify-start py-[0.75rem] px-[1rem] box-border gap-[1rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src={navigationConfig.support.icon}
        />
        <div className="relative leading-[1.5rem] font-semibold">{navigationConfig.support.name}</div>
      </div>

      {/* Weather widget can be added here */}
    </div>
      <div className="absolute top-[1.5rem] left-[21.188rem] w-[67.688rem] h-[74.188rem] overflow-hidden flex flex-col items-center justify-start">
        <div className="w-[67.688rem] relative h-[74.188rem] overflow-hidden shrink-0" />
        <div className="w-[67.688rem] relative h-[74.188rem] overflow-hidden shrink-0 mt-[-74.125rem]">
          <div className="absolute top-[0rem] left-[0.063rem] w-[67.625rem] h-[5.438rem] text-dimgray">
            <div className="absolute h-[1.15%] w-[100.09%] top-[98.28%] right-[-0.05%] bottom-[0.57%] left-[-0.05%] box-border opacity-[0.15] border-t-[1px] border-solid border-gray" />
            <img
              className="absolute top-[1.563rem] right-[0rem] w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/search-icon.svg"
            />
            <div className="absolute top-[1.563rem] left-[12.313rem] leading-[1.5rem]">
              Search
            </div>
            <div className="absolute top-[1.563rem] left-[1.438rem] flex flex-row items-center justify-start gap-[1.5rem] text-gray">
              <div className="w-[5.125rem] relative leading-[1.5rem] inline-block shrink-0">
                Travels
              </div>
              <img
                className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/arrow-down-icon.svg"
              />
            </div>
          </div>
          <div className="absolute top-[calc(50%_+_85.5px)] left-[calc(50%_-_224.5px)] rounded-t-xl rounded-b-none bg-ghostwhite w-[47.875rem] h-[30.75rem] overflow-hidden text-[0.875rem]">
            <b className="absolute top-[1.5rem] left-[1.5rem] text-[2rem] leading-[3rem]">
              To do’s
            </b>
            <div className="absolute top-[calc(50%_-_142px)] left-[5.61%] leading-[1.25rem] text-darkgray text-center">
              #
            </div>
            <div className="absolute top-[calc(50%_-_142px)] left-[18.28%] leading-[1.25rem] text-darkgray text-center">
              Task name
            </div>
            <div className="absolute top-[calc(50%_-_142px)] left-[69.06%] leading-[1.25rem] text-darkgray text-center">
              Assignee
            </div>
            <div className="absolute top-[calc(50%_-_142px)] left-[84.6%] leading-[1.25rem] text-darkgray text-center">
              Priority
            </div>
            <div className="absolute top-[8.75rem] left-[1.5rem] h-[3.5rem] flex flex-row items-center justify-start">
              <div className="w-[3rem] h-[3.5rem] flex flex-col items-center justify-center text-center">
                <div className="w-[1rem] relative leading-[1.25rem] flex items-center justify-center h-[1.75rem] shrink-0">
                  1
                </div>
              </div>
              <div className="w-[3.25rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[1.5rem] relative rounded-80xl bg-white h-[1.5rem]" />
              </div>
              <div className="w-[24.313rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[22.313rem] relative leading-[1.25rem] flex items-center h-[1.75rem] shrink-0">
                  Vitae id lobortis neque adipiscing id enim viverra.
                </div>
              </div>
              <div className="w-[7.438rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[5.438rem] relative leading-[1.25rem] flex items-center h-[1.75rem] shrink-0">
                  Artur
                </div>
              </div>
              <div className="w-[6.875rem] h-[3.5rem] flex flex-col items-center justify-center text-[0.75rem] text-white">
                <div className="rounded-80xl bg-coral-100 flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem]">
                  <div className="relative tracking-[0.4px] leading-[1rem]">
                    Medium
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[12.75rem] left-[1.5rem] h-[3.5rem] flex flex-row items-center justify-start">
              <div className="w-[3rem] h-[3.5rem] flex flex-col items-center justify-center text-center">
                <div className="w-[1rem] relative leading-[1.25rem] flex items-center justify-center h-[1.75rem] shrink-0">
                  2
                </div>
              </div>
              <div className="w-[3.25rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[1.5rem] relative rounded-80xl bg-white h-[1.5rem]" />
              </div>
              <div className="w-[24.313rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[22.313rem] relative leading-[1.25rem] flex items-center h-[1.75rem] shrink-0">
                  Consequat viverra at sagittis nisl arcu amet.
                </div>
              </div>
              <div className="w-[7.438rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[5.438rem] relative leading-[1.25rem] flex items-center h-[1.75rem] shrink-0">
                  Marta
                </div>
              </div>
              <div className="w-[6.875rem] h-[3.5rem] flex flex-col items-center justify-center text-[0.75rem] text-white">
                <div className="rounded-80xl bg-crimson flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem]">
                  <div className="relative tracking-[0.4px] leading-[1rem]">
                    High
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[16.75rem] left-[1.5rem] h-[3.5rem] flex flex-row items-center justify-start">
              <div className="w-[3rem] h-[3.5rem] flex flex-col items-center justify-center text-center">
                <div className="w-[1rem] relative leading-[1.25rem] flex items-center justify-center h-[1.75rem] shrink-0">
                  3
                </div>
              </div>
              <div className="w-[3.25rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[1.5rem] relative rounded-80xl bg-white h-[1.5rem]" />
              </div>
              <div className="w-[24.313rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[22.313rem] relative leading-[1.25rem] flex items-center h-[1.75rem] shrink-0">
                  Diam imperdiet vitae venenatis ultrices tellus in.
                </div>
              </div>
              <div className="w-[7.438rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[5.438rem] relative leading-[1.25rem] flex items-center h-[1.75rem] shrink-0">
                  Artur
                </div>
              </div>
              <div className="w-[6.875rem] h-[3.5rem] flex flex-col items-center justify-center text-[0.75rem] text-white">
                <div className="rounded-80xl bg-coral-100 flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem]">
                  <div className="relative tracking-[0.4px] leading-[1rem]">
                    Medium
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[20.75rem] left-[1.5rem] h-[3.5rem] flex flex-row items-center justify-start">
              <div className="w-[3rem] h-[3.5rem] flex flex-col items-center justify-center text-center">
                <div className="w-[1rem] relative leading-[1.25rem] flex items-center justify-center h-[1.75rem] shrink-0">
                  4
                </div>
              </div>
              <img
                className="w-[3.25rem] relative h-[3.5rem]"
                alt=""
                src="/02-compact-row--05-checkbox.svg"
              />
              <div className="w-[24.313rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[22.313rem] relative leading-[1.25rem] flex items-center h-[1.75rem] shrink-0">
                  Vitae tellus nisl facilisi a dignissim quam morbi.
                </div>
              </div>
              <div className="w-[7.438rem] h-[3.5rem] flex flex-col items-center justify-center">
                <div className="w-[5.438rem] relative leading-[1.25rem] flex items-center h-[1.75rem] shrink-0">
                  Marta
                </div>
              </div>
              <div className="w-[6.875rem] h-[3.5rem] flex flex-row items-center justify-end text-[0.75rem] text-white">
                <img
                  className="w-[6.875rem] relative h-[3.5rem]"
                  alt=""
                  src="/base.svg"
                />
                <div className="rounded-80xl bg-darkgray flex flex-row items-center justify-start py-[0.25rem] px-[0.5rem] ml-[-2.625rem]">
                  <div className="relative tracking-[0.4px] leading-[1rem]">
                    Low
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[26.219rem] left-[calc(50%_-_359.5px)] rounded-2xl bg-ghostwhite box-border w-[44.938rem] flex flex-col items-center justify-center py-[0.75rem] px-[2rem] text-[1rem] text-dimgray border-[1px] border-solid border-darkgray">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <div className="relative leading-[1.5rem] font-semibold">
                  Add new task
                </div>
                <img
                  className="w-[1.5rem] relative h-[1.5rem]"
                  alt=""
                  src="/plus-icon.svg"
                />
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_210px)] right-[1.5rem] flex flex-row items-center justify-end gap-[0.5rem] text-[1rem]">
              <div className="relative leading-[1.5rem] font-semibold">
                Sort
              </div>
              <img
                className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                alt=""
                src="/sort-icon.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[42.438rem] left-[0.063rem] rounded-2xl w-[18.25rem] h-[31.75rem] object-cover"
            alt=""
            src="/map@2x.png"
          />
          <div className="absolute top-[29.25rem] left-[0rem] rounded-2xl bg-white w-[18.25rem] h-[10.688rem]">
            <div className="absolute top-[1.5rem] left-[1.5rem] leading-[1.5rem] font-semibold text-darkgray">
              Travel date
            </div>
            <b className="absolute top-[3.625rem] left-[1.5rem] text-[2rem] leading-[3rem]">
              9 days
            </b>
            <div className="absolute bottom-[1.688rem] left-[1.5rem] flex flex-row items-center justify-start gap-[1rem] text-[0.875rem]">
              <div className="flex flex-row items-center justify-start">
                <div className="w-[5.125rem] relative leading-[1.25rem] font-semibold inline-block shrink-0">
                  13.12.2021
                </div>
              </div>
              <img
                className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/arrows-icon-blue.svg"
              />
              <div className="w-[5.125rem] relative leading-[1.25rem] font-semibold inline-block shrink-0">
                22.12.2021
              </div>
            </div>
            <img
              className="absolute top-[1.5rem] right-[1rem] w-[1.5rem] h-[1.5rem] object-cover"
              alt=""
              src="/more-icon1@2x.png"
            />
          </div>
          <div className="absolute top-[29.25rem] left-[19.75rem] rounded-2xl bg-white w-[18.25rem] h-[10.688rem]">
            <div className="absolute top-[1.5rem] left-[1.5rem] leading-[1.5rem] font-semibold text-darkgray">
              People
            </div>
            <div className="absolute top-[4.75rem] left-[3.313rem] leading-[1.5rem] font-semibold">
              /adults
            </div>
            <div className="absolute bottom-[1.313rem] left-[1.5rem] flex flex-row items-center justify-start gap-[0.5rem] text-[0.875rem]">
              <img
                className="w-[3.5rem] relative h-[2rem]"
                alt=""
                src="/avataer.svg"
              />
              <div className="relative leading-[1.25rem]">Marta, Artur</div>
            </div>
            <b className="absolute top-[3.625rem] left-[1.5rem] text-[2rem] leading-[3rem]">
              2
            </b>
            <img
              className="absolute h-[18.71%] w-[10.96%] top-[69.01%] right-[8.22%] bottom-[12.28%] left-[80.82%] rounded-80xl max-w-full overflow-hidden max-h-full"
              alt=""
              src="/add-people-icon.svg"
            />
            <img
              className="absolute top-[1.5rem] right-[1rem] w-[1.5rem] h-[1.5rem] object-cover"
              alt=""
              src="/more-icon1@2x.png"
            />
          </div>
          <div className="absolute top-[29.25rem] left-[39.5rem] rounded-2xl bg-white w-[28.125rem] h-[10.688rem] text-[0.875rem]">
            <div className="absolute top-[1.5rem] left-[1.5rem] text-[1rem] leading-[1.5rem] font-semibold text-darkgray">
              Destination
            </div>
            <b className="absolute top-[3.625rem] left-[1.5rem] text-[2rem] leading-[3rem]">
              Rome
            </b>
            <div className="absolute bottom-[1.688rem] left-[1.5rem] flex flex-row items-center justify-start gap-[1rem]">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <img
                  className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                  alt=""
                  src="/poland-flag.svg"
                />
                <div className="relative leading-[1.25rem] font-semibold">
                  Poland
                </div>
              </div>
              <img
                className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/arrows-icon-grey.svg"
              />
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <img
                  className="w-[1.331rem] relative h-[1rem] overflow-hidden shrink-0"
                  alt=""
                  src="/frame1.svg"
                />
                <div className="relative leading-[1.25rem] font-semibold">
                  Greece
                </div>
              </div>
            </div>
            <div className="absolute top-[7.75rem] right-[1.5rem] flex flex-row items-start justify-start gap-[0.5rem]">
              <img
                className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/plane-icon.svg"
              />
              <div className="relative leading-[1.25rem] font-semibold">
                3 h 45 min flight
              </div>
            </div>
            <img
              className="absolute top-[1.5rem] right-[1rem] w-[1.5rem] h-[1.5rem] object-cover"
              alt=""
              src="/more-icon1@2x.png"
            />
          </div>
          <div className="absolute top-[7.875rem] left-[0.063rem] rounded-2xl bg-lightblue w-[47.813rem] h-[18.875rem] text-[4.5rem]">
            <img
              className="absolute top-[5.938rem] left-[21.313rem] rounded-t-none rounded-br-2xl rounded-bl-none w-[26.5rem] h-[12.938rem] overflow-hidden opacity-[0.65]"
              alt=""
              src="/nearest-trip-blur.svg"
            />
            <div className="absolute top-[2.5rem] left-[2.5rem] w-[21.5rem] h-[13.875rem]">
              <b className="absolute top-[1.5rem] left-[0rem] leading-[6.75rem]">
                Santorini
              </b>
              <div className="absolute top-[0rem] left-[0rem] text-[1rem] leading-[1.5rem] font-semibold">
                Nearest trip
              </div>
              <img
                className="absolute top-[calc(50%_+_71px)] left-[calc(50%_-_164px)] w-[1.5rem] h-[1.5rem] overflow-hidden cursor-pointer"
                alt=""
                src="/arrow-left.svg"
                onClick={onArrowLeftIconClick}
              />
              <div
                className="absolute top-[10.375rem] left-[3.5rem] rounded-980xl bg-white flex flex-row items-start justify-start p-[1rem] cursor-pointer"
                onClick={onArrowLeftIconClick}
              >
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/arrow.svg"
                />
              </div>
              <img
                className="absolute top-[-3.5rem] left-[18.813rem] rounded-t-none rounded-br-2xl rounded-bl-none w-[26.5rem] h-[19.875rem] overflow-hidden"
                alt=""
                src="/ilustration.svg"
              />
            </div>
          </div>
          <div className="absolute top-[7.875rem] left-[49.438rem] rounded-2xl bg-ghostwhite w-[18.25rem] h-[18.875rem] text-center text-[0.981rem] text-white">
            <div className="absolute top-[1.5rem] left-[1.5rem] text-[1rem] leading-[1.5rem] font-semibold text-darkgray text-left">
              Expenses
            </div>
            <div className="absolute top-[4.188rem] left-[8.888rem] w-[6.094rem] h-[6.094rem]">
              <div className="absolute top-[0rem] left-[0rem] shadow-[0px_12.6px_33.63px_rgba(255,_116,_44,_0.24)] rounded-[50%] [background:linear-gradient(225.42deg,_#ff742c,_rgba(255,_116,_44,_0.5))] w-[6.094rem] h-[6.094rem]" />
              <div className="absolute w-[calc(100%_-_61.7px)] top-[calc(50%_-_10.75px)] left-[1.956rem] leading-[1.399rem] font-semibold flex items-center justify-center h-[1.4rem]">
                30%
              </div>
            </div>
            <div className="absolute top-[7.619rem] left-[4.763rem] w-[7.488rem] h-[7.488rem] text-[1.069rem]">
              <div className="absolute top-[0rem] left-[0rem] shadow-[0px_12.6px_33.63px_rgba(108,_80,_252,_0.24)] rounded-[50%] [background:linear-gradient(206.5deg,_#6c50fc,_rgba(108,_80,_252,_0.5))] w-[7.488rem] h-[7.488rem]" />
              <div className="absolute w-[calc(100%_-_79.5px)] top-[calc(50%_-_12.3px)] left-[2.444rem] leading-[1.526rem] font-semibold flex items-center justify-center h-[1.525rem]">
                52%
              </div>
            </div>
            <div className="absolute top-[6.031rem] left-[2.438rem] w-[4.263rem] h-[4.263rem]">
              <div className="absolute top-[0rem] left-[0rem] shadow-[0px_13.8px_36.69px_rgba(2,_175,_114,_0.24)] rounded-[50%] [background:linear-gradient(206.38deg,_#02af72,_rgba(2,_175,_114,_0.5))] w-[4.263rem] h-[4.263rem]" />
              <div className="absolute w-[calc(100%_-_35.8px)] top-[calc(50%_-_10.6px)] left-[1.188rem] leading-[1.399rem] font-semibold flex items-center justify-center h-[1.4rem]">
                18%
              </div>
            </div>
            <div className="absolute bottom-[0rem] left-[1.5rem] flex flex-row items-center justify-start gap-[1rem] text-left text-[0.875rem] text-gray">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <div className="w-[0.75rem] relative rounded-[50%] bg-ghostwhite box-border h-[0.75rem] border-[2px] border-solid border-mediumseagreen-200" />
                <div className="relative leading-[1.25rem] font-semibold">
                  Transport
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <div className="w-[0.75rem] relative rounded-[50%] bg-ghostwhite box-border h-[0.75rem] border-[2px] border-solid border-blueviolet" />
                <div className="relative leading-[1.25rem] font-semibold">
                  Hotel
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <div className="w-[0.75rem] relative rounded-[50%] bg-ghostwhite box-border h-[0.75rem] border-[2px] border-solid border-coral-100" />
                <div className="relative leading-[1.25rem] font-semibold">
                  Other
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1.5rem] left-[91.875rem] w-[25.188rem] h-[76.313rem] overflow-hidden flex flex-col items-center justify-start text-right">
        <div className="w-[25.188rem] relative h-[76.313rem] overflow-hidden shrink-0" />
        <div className="w-[25.188rem] h-[76.313rem] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[2.5rem] mt-[-76.313rem]">
          <div className="w-[25.188rem] relative h-[5.375rem]">
            <div className="absolute h-[1.16%] w-full top-[99.42%] right-[0.12%] bottom-[-0.58%] left-[-0.12%] box-border opacity-[0.15] border-t-[1px] border-solid border-gray" />
            <img
              className="absolute top-[1.438rem] left-[5.625rem] rounded-80xl w-[1.75rem] h-[1.75rem] overflow-hidden"
              alt=""
              src="/flag-uk.svg"
            />
            <img
              className="absolute top-[1.313rem] left-[9.375rem] w-[2rem] h-[2rem]"
              alt=""
              src="/notification-icon.svg"
            />
            <div className="absolute top-[calc(50%_-_31px)] right-[0rem] w-[11.813rem] h-[3.125rem] flex flex-row items-center justify-end pt-[0rem] px-[0.125rem] pb-[0.125rem] box-border gap-[0.875rem]">
              <div className="relative leading-[1.5rem]">Nick McMilan</div>
              <img
                className="w-[3rem] relative h-[3rem]"
                alt=""
                src="/nick-mcmilan.svg"
              />
            </div>
          </div>
          <div className="w-[25.125rem] relative rounded-t-xl rounded-b-none bg-ghostwhite h-[68.438rem] text-left text-[0.875rem]">
            <b className="absolute top-[0rem] left-[0.063rem] text-[2rem] leading-[3rem]">
              Timeline
            </b>
            <div className="absolute top-[32.063rem] left-[0.063rem] w-[26.063rem] h-[36.313rem] overflow-hidden text-darkgray">
              <div className="absolute top-[-11.937rem] left-[0rem] w-[26.063rem] h-[63rem]">
                <div className="absolute top-[6.125rem] left-[4.625rem] rounded-3xl bg-lavender w-[20.063rem] h-[16rem] overflow-hidden text-[1rem] text-mediumslateblue">
                  <div className="absolute top-[-25rem] left-[-55.375rem] w-[138.875rem] h-[67.375rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[66.931rem] box-border opacity-[0.15]">
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                    <div className="w-[87.375rem] relative bg-white h-[0.625rem] [transform:_rotate(-50deg)] ml-[-85.563rem]" />
                  </div>
                  <div className="absolute top-[1.625rem] left-[1.5rem] w-[12.375rem] h-[2.75rem] flex flex-row items-center justify-start gap-[1rem]">
                    <img
                      className="w-[2.5rem] relative rounded-980xl h-[2.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/frame-45.svg"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-row items-center justify-start gap-[0.25rem]">
                        <div className="relative leading-[1.5rem] font-semibold">
                          Warsaw
                        </div>
                        <img
                          className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                          alt=""
                          src="/size20-themefilled.svg"
                        />
                        <div className="relative leading-[1.5rem] font-semibold">
                          Venice
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start opacity-[0.64] text-[0.875rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                          <div className="relative leading-[1.25rem] font-semibold">
                            16:55
                          </div>
                          <div className="relative leading-[1.25rem] font-semibold">
                            •
                          </div>
                          <div className="relative leading-[1.25rem] font-semibold">
                            18:05
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute top-[2.25rem] right-[1.5rem] w-[1.5rem] h-[1.5rem] object-cover"
                    alt=""
                    src="/24x24--ic24morever@2x.png"
                  />
                </div>
                <div className="absolute top-[7rem] left-[0rem] w-[26.063rem] h-[7rem]">
                  <div className="absolute w-[calc(100%_-_375px)] top-[-0.125rem] left-[0rem] leading-[1.25rem] inline-block">
                    17:00
                  </div>
                  <div className="absolute top-[0.469rem] left-[4.094rem] box-border w-[21.125rem] h-[0.063rem] opacity-[0.15] border-t-[1px] border-solid border-gray" />
                </div>
                <div className="absolute top-[14rem] left-[0rem] w-[26.063rem] h-[7rem]">
                  <div className="absolute w-[calc(100%_-_375px)] top-[-0.125rem] left-[0rem] leading-[1.25rem] inline-block">
                    17:30
                  </div>
                  <div className="absolute top-[0.469rem] left-[4.094rem] box-border w-[21.125rem] h-[0.063rem] opacity-[0.15] border-t-[1px] border-solid border-gray" />
                </div>
                <div className="absolute top-[21rem] left-[0rem] w-[26.063rem] h-[7rem]">
                  <div className="absolute top-[-0.125rem] left-[0rem] leading-[1.25rem]">
                    18:00
                  </div>
                  <div className="absolute top-[0.469rem] left-[4.094rem] box-border w-[21.125rem] h-[0.063rem] opacity-[0.15] border-t-[1px] border-solid border-gray" />
                </div>
                <div className="absolute top-[28rem] left-[0rem] w-[26.063rem] h-[7rem]">
                  <div className="absolute w-[calc(100%_-_375px)] top-[-0.437rem] left-[0rem] leading-[1.25rem] inline-block">
                    18:30
                  </div>
                  <div className="absolute top-[0.469rem] left-[4.094rem] box-border w-[21.125rem] h-[0.063rem] opacity-[0.15] border-t-[1px] border-solid border-gray" />
                  <div className="absolute top-[1rem] left-[4.625rem] rounded-3xl bg-seagreen w-[20.063rem] h-[6rem] flex flex-row items-center justify-end py-[1.625rem] px-[1.5rem] box-border gap-[5.437rem] text-[1rem] text-mediumseagreen-100">
                    <div className="w-[10.125rem] h-[2.75rem] flex flex-row items-center justify-start gap-[1rem]">
                      <img
                        className="w-[2.5rem] relative rounded-980xl h-[2.5rem] overflow-hidden shrink-0"
                        alt=""
                        src="/frame-451.svg"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative leading-[1.5rem] font-semibold">
                          Taxi transfer
                        </div>
                        <div className="flex flex-row items-center justify-start opacity-[0.64] text-[0.875rem]">
                          <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                            <div className="relative leading-[1.25rem] font-semibold">
                              18:30
                            </div>
                            <div className="relative leading-[1.25rem] font-semibold">
                              •
                            </div>
                            <div className="relative leading-[1.25rem] font-semibold">
                              19:00
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[1.5rem] relative h-[1.5rem] object-cover"
                      alt=""
                      src="/24x24--ic24morever1@2x.png"
                    />
                  </div>
                </div>
                <div className="absolute top-[35rem] left-[0rem] w-[26.063rem] h-[7rem]">
                  <div className="absolute w-[calc(100%_-_375px)] top-[-0.437rem] left-[0rem] leading-[1.25rem] inline-block">
                    19:00
                  </div>
                  <div className="absolute top-[0.469rem] left-[4.094rem] box-border w-[21.125rem] h-[0.063rem] opacity-[0.15] border-t-[1px] border-solid border-gray" />
                </div>
                <div className="absolute top-[42rem] left-[0rem] w-[26.063rem] h-[7rem]">
                  <div className="absolute w-[calc(100%_-_375px)] top-[-0.437rem] left-[0rem] leading-[1.25rem] inline-block">
                    19:30
                  </div>
                  <div className="absolute top-[0.469rem] left-[4.094rem] box-border w-[21.125rem] h-[0.063rem] opacity-[0.15] border-t-[1px] border-solid border-gray" />
                </div>
                <div className="absolute top-[0rem] left-[0rem] w-[26.063rem] h-[7rem]">
                  <div className="absolute w-[calc(100%_-_375px)] top-[-0.125rem] left-[0rem] leading-[1.25rem] inline-block">
                    16:30
                  </div>
                  <div className="absolute top-[0.469rem] left-[4.094rem] box-border w-[21.125rem] h-[0.063rem] opacity-[0.15] border-t-[1px] border-solid border-gray" />
                </div>
                <div className="absolute top-[49rem] left-[0rem] w-[26.063rem] h-[7rem]">
                  <div className="absolute top-[-0.125rem] left-[0rem] leading-[1.25rem]">
                    20:00
                  </div>
                  <div className="absolute top-[0.469rem] left-[4.094rem] box-border w-[21.125rem] h-[0.063rem] opacity-[0.15] border-t-[1px] border-solid border-gray" />
                </div>
                <div className="absolute top-[56rem] left-[0rem] w-[26.063rem] h-[7rem]">
                  <div className="absolute top-[-0.125rem] left-[0rem] leading-[1.25rem]">
                    20:30
                  </div>
                  <div className="absolute top-[0.469rem] left-[4.094rem] box-border w-[21.125rem] h-[0.063rem] opacity-[0.15] border-t-[1px] border-solid border-gray" />
                </div>
                <div className="absolute top-[36rem] left-[4.625rem] rounded-3xl bg-coral-200 w-[20.063rem] h-[13rem] flex flex-row items-center justify-end pt-[1.625rem] px-[1.5rem] pb-[8.625rem] box-border gap-[2.5rem] text-[1rem] text-coral-100">
                  <div className="w-[13.063rem] h-[2.75rem] flex flex-row items-center justify-start gap-[1rem]">
                    <img
                      className="w-[2.5rem] relative rounded-980xl h-[2.5rem] overflow-hidden shrink-0"
                      alt=""
                      src="/frame-452.svg"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[1.5rem] font-semibold">
                        Check into a hotel
                      </div>
                      <div className="flex flex-row items-center justify-start opacity-[0.64] text-[0.875rem]">
                        <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                          <div className="relative leading-[1.25rem] font-semibold">
                            19:00
                          </div>
                          <div className="relative leading-[1.25rem] font-semibold">
                            •
                          </div>
                          <div className="relative leading-[1.25rem] font-semibold">
                            20:00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] object-cover"
                    alt=""
                    src="/24x24--ic24morever2@2x.png"
                  />
                </div>
              </div>
              <div className="absolute top-[17.313rem] left-[0rem] h-[1.75rem] flex flex-row items-center justify-start text-center text-[0.75rem] text-white">
                <div className="w-[3.75rem] rounded-980xl bg-mediumslateblue h-[1.75rem] flex flex-row items-center justify-center py-[0.25rem] px-[0.5rem] box-border">
                  <div className="relative tracking-[0.4px] leading-[1rem]">
                    1835
                  </div>
                </div>
                <div className="w-[21.5rem] relative box-border h-[0.125rem] border-t-[2px] border-solid border-mediumslateblue" />
              </div>
            </div>
            <div className="absolute top-[0.063rem] right-[0.063rem] rounded-2xl bg-gray flex flex-col items-end justify-center py-[0.75rem] px-[2rem] text-[1rem] text-white">
              <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                <div className="relative leading-[1.5rem] font-semibold">
                  Add event
                </div>
                <img
                  className="w-[1.5rem] relative h-[1.5rem]"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
            <div className="absolute h-[34.34%] w-[calc(100%_+_1px)] top-[8.13%] right-[-0.062rem] bottom-[57.53%] left-[0rem] bg-ghostwhite text-center">
              <div className="absolute top-[3rem] left-[0.313rem] w-[24.5rem] h-[21rem]">
                <div className="absolute h-[16.67%] w-[14.29%] top-[16.67%] right-[85.71%] bottom-[66.67%] left-[0%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    1
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[16.67%] right-[71.43%] bottom-[66.67%] left-[14.29%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    2
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[16.67%] right-[57.14%] bottom-[66.67%] left-[28.57%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    3
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[16.67%] right-[42.86%] bottom-[66.67%] left-[42.86%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    4
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[16.67%] right-[28.57%] bottom-[66.67%] left-[57.14%] flex flex-col items-center justify-start">
                  <div className="w-[3.5rem] relative h-[3.5rem]" />
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0 mt-[-1.25rem]">
                    5
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[16.67%] right-[14.29%] bottom-[66.67%] left-[71.43%] flex flex-col items-center justify-start">
                  <div className="w-[3.5rem] relative h-[3.5rem]" />
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0 mt-[-1.25rem]">
                    6
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[16.67%] right-[0%] bottom-[66.67%] left-[85.71%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    7
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[33.33%] right-[85.71%] bottom-[50%] left-[0%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    8
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[33.33%] right-[71.43%] bottom-[50%] left-[14.29%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    9
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[33.33%] right-[57.14%] bottom-[50%] left-[28.57%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    10
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[33.33%] right-[42.86%] bottom-[50%] left-[42.86%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    11
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[33.33%] right-[28.57%] bottom-[50%] left-[57.14%] flex flex-col items-start justify-center py-[0rem] px-[0.018rem] box-border">
                  <div className="w-[3.438rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    12
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[33.33%] right-[14.29%] bottom-[50%] left-[71.43%] text-white">
                  <img
                    className="absolute h-[calc(100%_-_8px)] w-[calc(100%_-_8px)] top-[0.25rem] right-[0.25rem] bottom-[0.25rem] left-[0.25rem] rounded-980xl max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/style.svg"
                  />
                  <div className="absolute w-full top-[calc(50%_-_10px)] left-[0rem] leading-[1.25rem] inline-block h-[1.25rem]">
                    13
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[33.33%] right-[0%] bottom-[50%] left-[85.71%] flex flex-col items-center justify-end py-[0.25rem] px-[0rem] box-border gap-[0.562rem]">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    14
                  </div>
                  <div className="w-[0.313rem] relative rounded-[50%] bg-darkgray h-[0.313rem]" />
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[50%] right-[85.71%] bottom-[33.33%] left-[0%] flex flex-col items-center justify-end py-[0.25rem] px-[0rem] box-border gap-[0.562rem]">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    15
                  </div>
                  <div className="w-[0.313rem] relative rounded-[50%] bg-darkgray h-[0.313rem]" />
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[50%] right-[71.43%] bottom-[33.33%] left-[14.29%] flex flex-col items-center justify-end py-[0.25rem] px-[0rem] box-border gap-[0.562rem]">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    16
                  </div>
                  <div className="w-[0.313rem] relative rounded-[50%] bg-darkgray h-[0.313rem]" />
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[50%] right-[57.14%] bottom-[33.33%] left-[28.57%] flex flex-col items-center justify-end py-[0.25rem] pr-[0.393rem] pl-[0.356rem] box-border gap-[0.562rem]">
                  <div className="w-[2.75rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    17
                  </div>
                  <div className="w-[0.313rem] relative rounded-[50%] bg-darkgray h-[0.313rem]" />
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[50%] right-[42.86%] bottom-[33.33%] left-[42.86%] flex flex-col items-center justify-end py-[0.25rem] px-[0rem] box-border gap-[0.562rem]">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    18
                  </div>
                  <div className="w-[0.313rem] relative rounded-[50%] bg-darkgray h-[0.313rem]" />
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[50%] right-[28.57%] bottom-[33.33%] left-[57.14%] flex flex-col items-center justify-end py-[0.25rem] px-[0rem] box-border gap-[0.562rem]">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    19
                  </div>
                  <div className="w-[0.313rem] relative rounded-[50%] bg-darkgray h-[0.313rem]" />
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[50%] right-[14.29%] bottom-[33.33%] left-[71.43%] flex flex-col items-center justify-end py-[0.25rem] px-[0rem] box-border gap-[0.562rem]">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    20
                  </div>
                  <div className="w-[0.313rem] relative rounded-[50%] bg-darkgray h-[0.313rem]" />
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[50%] right-[0%] bottom-[33.33%] left-[85.71%] flex flex-col items-center justify-end py-[0.25rem] px-[0rem] box-border gap-[0.562rem]">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    21
                  </div>
                  <div className="w-[0.313rem] relative rounded-[50%] bg-darkgray h-[0.313rem]" />
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[66.67%] right-[85.71%] bottom-[16.67%] left-[0%] overflow-hidden">
                  <img
                    className="absolute h-[calc(100%_-_8px)] w-[calc(100%_-_8px)] top-[0.25rem] right-[0.25rem] bottom-[0.25rem] left-[0.25rem] rounded-980xl max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/style1.svg"
                  />
                  <div className="absolute w-full top-[calc(50%_-_10px)] left-[0rem] leading-[1.25rem] inline-block h-[1.25rem]">
                    22
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[66.67%] right-[71.43%] bottom-[16.67%] left-[14.29%] flex flex-col items-center justify-center">
                  <div className="w-[2.75rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    23
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[66.67%] right-[57.14%] bottom-[16.67%] left-[28.57%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    24
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[66.67%] right-[42.86%] bottom-[16.67%] left-[42.86%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    25
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[66.67%] right-[28.57%] bottom-[16.67%] left-[57.14%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    26
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[66.67%] right-[14.29%] bottom-[16.67%] left-[71.43%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    27
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[66.67%] right-[0%] bottom-[16.67%] left-[85.71%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    28
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[83.33%] right-[85.71%] bottom-[0%] left-[0%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    29
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[83.33%] right-[71.43%] bottom-[0%] left-[14.29%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    30
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[83.33%] right-[57.14%] bottom-[0%] left-[28.57%] flex flex-col items-center justify-center">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    31
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[83.33%] right-[42.86%] bottom-[0%] left-[42.86%] flex flex-col items-center justify-center text-dimgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    1
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[83.33%] right-[28.57%] bottom-[0%] left-[57.14%] flex flex-col items-center justify-center text-dimgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    2
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[83.33%] right-[14.29%] bottom-[0%] left-[71.43%] flex flex-col items-center justify-center text-dimgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    3
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[83.33%] right-[0%] bottom-[0%] left-[85.71%] flex flex-col items-center justify-center text-dimgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    4
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[0%] right-[85.71%] bottom-[83.33%] left-[0%] flex flex-col items-center justify-center text-darkgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    Mo
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[0%] right-[71.43%] bottom-[83.33%] left-[14.29%] flex flex-col items-center justify-center text-darkgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    Tu
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[0%] right-[57.14%] bottom-[83.33%] left-[28.57%] flex flex-col items-center justify-center text-darkgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    We
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[0%] right-[42.86%] bottom-[83.33%] left-[42.86%] flex flex-col items-center justify-center text-darkgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    Th
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[0%] right-[28.57%] bottom-[83.33%] left-[57.14%] flex flex-col items-center justify-center text-darkgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    Fr
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[0%] right-[14.29%] bottom-[83.33%] left-[71.43%] flex flex-col items-center justify-center text-darkgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    Sa
                  </div>
                </div>
                <div className="absolute h-[16.67%] w-[14.29%] top-[0%] right-[0%] bottom-[83.33%] left-[85.71%] flex flex-col items-center justify-center text-darkgray">
                  <div className="w-[3.5rem] relative leading-[1.25rem] inline-block h-[1.25rem] shrink-0">
                    Su
                  </div>
                </div>
              </div>
              <b className="absolute top-[0rem] left-[0.063rem] text-[1.25rem] leading-[2rem] text-left">
                December
              </b>
              <div className="absolute top-[0.375rem] right-[0.125rem] flex flex-row items-start justify-start gap-[0.5rem]">
                <img
                  className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/small-arrow-left-icon.svg"
                />
                <img
                  className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                  alt=""
                  src="/small-arrow-right-icon.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Santorini;

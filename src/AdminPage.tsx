import { FunctionComponent, useCallback, useState } from "react";
import Sidenav from "./components/Sidenav";
import Timeline from "./components/Timeline";
import NavigationMain from "./components/MainNavigation";

const AdminPage: FunctionComponent = () => {
  const onArrowLeftIconClick = useCallback(() => {
    // Please sync "Rome" to the project
  }, []);


  return (
    <div className="w-full relative rounded-2xl bg-ghostwhite h-[77.813rem] overflow-hidden text-left text-[1rem] text-gray font-h400 ">
      <div className="absolute top-[1.5rem] left-[21.188rem] w-[67.688rem] h-[74.188rem] overflow-hidden flex flex-col items-center justify-start">
        <div className="w-[67.688rem] relative h-[74.188rem] overflow-hidden shrink-0" />
        <div className="w-[67.688rem] relative h-[74.188rem] overflow-hidden shrink-0 mt-[-74.125rem]">
          <NavigationMain />
          <div className="todos-module absolute top-[calc(50%_+_85.5px)] left-[calc(50%_-_224.5px)] rounded-t-xl rounded-b-none bg-ghostwhite w-[47.875rem] h-[30.75rem] overflow-hidden text-[0.875rem]">
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
            className="map-module absolute top-[42.438rem] left-[0.063rem] rounded-2xl w-[18.25rem] h-[31.75rem] object-cover"
            alt=""
            src="/map@2x.png"
          />
          <div className="travelDate-module absolute top-[29.25rem] left-[0rem] rounded-2xl bg-white w-[18.25rem] h-[10.688rem]">
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
          <div className="people-module absolute top-[29.25rem] left-[19.75rem] rounded-2xl bg-white w-[18.25rem] h-[10.688rem]">
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
          <div className="destination-module absolute top-[29.25rem] left-[39.5rem] rounded-2xl bg-white w-[28.125rem] h-[10.688rem] text-[0.875rem]">
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
          <div className="nearest-trip-module absolute top-[7.875rem] left-[0.063rem] rounded-2xl bg-lightblue w-[47.813rem] h-[18.875rem] text-[4.5rem]">
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
          <div className="expenses-module absolute top-[7.875rem] left-[49.438rem] rounded-2xl bg-ghostwhite w-[18.25rem] h-[18.875rem] text-center text-[0.981rem] text-white">
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
      <Timeline />
    </div>
  );
};

export default AdminPage;

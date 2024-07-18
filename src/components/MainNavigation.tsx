import React from 'react'

type Props = {}

const MainNavigation = (props: Props) => {
    return (
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
    )
}

export default MainNavigation
import React from 'react';

const Dropdown = ({ title, children, content, isClick, className }) => {
  return (
    <div className="dropdown-container ">
      <div className={`dropdown ${!isClick && 'dropdown-hover'}`}>
        <label
          className={`btn btn-sm p-2 border-0 hover:bg-white hover:text-black flex bg-erajaya ${
            children && children?.length > 0 ? 'hover:rounded-b-none' : ''
          } transition-none`}
          tabIndex="0">
          <span className="uppercase text-[13px] font-sans leading-[1.6em] tracking-[-0.25px]">
            {title}
          </span>
        </label>
        {children && children?.length > 0 && (
          <div
            className={`dropdown-menu py-2 pr-1 dropdown-menu-bottom-right w-fit mt-0 bg-white ${
              children && children?.length > 0
                ? 'rounded-tl-none border-none'
                : ''
            } transition-none`}>
            <div>
              {children?.map((child, idx) => {
                return (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a
                    key={idx}
                    tabIndex={idx}
                    className="dropdown-item px-2 flex w-full justify-between text-left text-sm leading-5 border-l-4 border-transparent text-gray-600  hover:border-erajaya hover:!text-gray-900 transition active:bg-white"
                    role="menuitem">
                    <span className="whitespace-nowrap font-sans font-medium leading-[1.6em] tracking-[-0.25px]">
                      {child}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {content && (
          <div className="dropdown-menu dropdown-menu-bottom-left w-max bg-erajaya border-none">
            <div
              tabIndex="-1"
              className="dropdown-item flex w-full justify-between text-left text-sm leading-5 text-content2"
              role="menuitem">
              {content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

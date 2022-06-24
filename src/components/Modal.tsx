import { Menu } from "@headlessui/react";
import classNames from "classnames";

function Modal(prop: any) {
  return (
    <Menu>
      <Menu.Button as="div">
        <img src={prop.img} alt="" width={22} height={22} />
      </Menu.Button>
      <Menu.Items
        as="div"
        className={classNames(
          "absolute w-52  border bg-white shadow-xl z-10  box-content rounded-md",
          {
            "-top-80 right-0": prop.modal === "modal01",
            "-top-80 right-0 md:-right-44": prop.modal === "modal02",
          }
        )}
      >
        <Menu.Item>
          <div className="">
            {prop.data.map((item: any) => {
              return (
                <div key={item} className="py-1">
                  <div className="flex space-x-3 items-center p-2 cursor-pointer hover:bg-zinc-300">
                    <span className="text-black">{item}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Modal;

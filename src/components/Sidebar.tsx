import classNames from "classnames";

function Sidebar({ isOpen, setIsOpen }: any) {
  return (
    <div
      className={classNames(
        " h-[calc(100vh-58px)] w-0 bg-white border shadow-md top-0 rounded-md fixed  right-0 overflow-hidden transition-[width] ease-in-out duration-300 flex justify-center items-center ",
        {
          "w-80": isOpen,
        }
      )}
    >
      <ol className="space-y-2">
        <li className="p-2 hover:bg-zinc-600 rounded cursor-pointer ">
          Lorem ipsum dolor sit amet.
        </li>
        <li className="p-2 hover:bg-zinc-600 rounded cursor-pointer ">
          Lorem ipsum dolor sit amet.
        </li>
        <li className="p-2 hover:bg-zinc-600 rounded cursor-pointer ">
          Lorem ipsum dolor sit amet.
        </li>
        <li className="p-2 hover:bg-zinc-600 rounded cursor-pointer ">
          Lorem ipsum dolor sit amet.
        </li>
        <li className="p-2 hover:bg-zinc-600 rounded cursor-pointer ">
          Lorem ipsum dolor sit amet.
        </li>
        <li className="p-2 hover:bg-zinc-600 rounded cursor-pointer ">
          Lorem ipsum dolor sit amet.
        </li>
      </ol>
    </div>
  );
}

export default Sidebar;

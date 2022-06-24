import classNames from "classnames";

function Sidebar({ isOpen, setIsOpen }: any) {
  console.log(isOpen);
  return (
    <div
      className={classNames(
        " h-[calc(100vh-58px)] w-0 bg-white border shadow-md rounded-md fixed  right-0 overflow-hidden transition-[width] ease-in-out duration-700 flex",
        {
          "w-80": isOpen,
        }
      )}
    >
      Sidebar
    </div>
  );
}

export default Sidebar;

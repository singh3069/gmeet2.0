import MeetControls from "./MeetControls";
import MessageAndUserInfo from "./MessageAndUserInfo";
import TimeAndName from "./TimeAndName";

function Footer({ isOpen, setIsOpen }: any) {
  return (
    <div className="px-12  md:flex w-full text-white md:justify-between md:py-2 md:absolute bottom-0 left-0 right-0  md:px-4">
      <TimeAndName />
      <MeetControls />
      <MessageAndUserInfo isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Footer;

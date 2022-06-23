import MeetControls from "./MeetControls";
import MessageAndUserInfo from "./MessageAndUserInfo";
import TimeAndName from "./TimeAndName";

function Footer() {
  return (
    <div className="flex w-full text-white justify-between py-2 absolute bottom-0 left-0 right-0  px-4">
      <TimeAndName />
      <MeetControls />
      <MessageAndUserInfo />
    </div>
  );
}

export default Footer;

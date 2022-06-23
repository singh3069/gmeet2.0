import MeetControls from "./MeetControls";
import MessageAndUserInfo from "./MessageAndUserInfo";
import TimeAndName from "./TimeAndName";

function Footer() {
  return (
    <div className="flex w-full bg-black text-white justify-between py-2 bottom-0 absolute px-4">
      <TimeAndName />
      <MeetControls />
      <MessageAndUserInfo />
    </div>
  );
}

export default Footer;

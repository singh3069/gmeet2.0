import infoSVG from "../../IconsSVG/info.svg";
import participantsSVG from "../../IconsSVG/allUsers.svg";
import chatSVG from "../../IconsSVG/chat.svg";
import activitiesSVG from "../../IconsSVG/activities.svg";
import lockSVG from "../../IconsSVG/lock.svg";

const data = [
  {
    img: infoSVG,
    text: "Turn ON/OFF Microphone",
  },
  {
    img: participantsSVG,
    text: "Turn ON/OFF Camera",
  },
  {
    img: chatSVG,
    text: "Turn on captions",
  },
  {
    img: activitiesSVG,
    text: "Present now",
  },
  {
    img: lockSVG,
    text: "More Options",
  },
];

function MessageAndUserInfo({ setIsOpen, isOpen }: any) {
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="invisible md:visible">
      <div className="flex space-x-4">
        {data.map((e) => {
          return (
            <div
              className="p-2 hover:bg-neutral-700 relative box-border rounded-full cursor-pointer"
              key={e.text}
              onClick={toggleSideBar}
            >
              <img
                src={e.img}
                width={22}
                height={22}
                className="cursor-pointer box-border"
                alt={e.text}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageAndUserInfo;

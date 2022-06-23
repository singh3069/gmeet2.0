import infoSVG from "../../IconsSVG/info.svg";
import participantsSVG from "../../IconsSVG/allUsers.svg";
import chatSVG from "../../IconsSVG/chat.svg";
import activitiesSVG from "../../IconsSVG/activities.svg";
import lockSVG from "../../IconsSVG/lock.svg";

const data = [
  {
    img: infoSVG,
    hoverText: "Turn ON/OFF Microphone",
  },
  {
    img: participantsSVG,
    hoverText: "Turn ON/OFF Camera",
  },
  {
    img: chatSVG,
    hoverText: "Turn on captions",
  },
  {
    img: activitiesSVG,
    hoverText: "Present now",
  },
  {
    img: lockSVG,
    hoverText: "More Options",
  },
];

function MessageAndUserInfo() {
  return (
    <div>
      <div className="flex space-x-4">
        {data.map((e) => {
          return (
            <div className="p-2 hover:bg-neutral-700 relative box-border rounded-full cursor-pointer">
              <p className="hidden absolute hover:visible invisible top-0 text-sm text-red-800">
                {e.hoverText}
              </p>
              <img
                src={e.img}
                width={22}
                height={22}
                className="cursor-pointer box-border"
                alt={e.hoverText}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageAndUserInfo;

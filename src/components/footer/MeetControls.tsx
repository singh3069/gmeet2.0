import micSVG from "../../IconsSVG/mic.svg";
import videoSVG from "../../IconsSVG/videoCall.svg";
import closedCaptionSVG from "../../IconsSVG/closedCaption.svg";
import screenShareSVG from "../../IconsSVG/screenShare.svg";
import infoSVG from "../../IconsSVG/info.svg";
import leaveCallSVG from "../../IconsSVG/leaveCall.svg";
import classNames from "classnames";

const controlsSetting = [
  {
    img: micSVG,
    hoverText: "Turn ON/OFF Microphone",
  },
  {
    img: videoSVG,
    hoverText: "Turn ON/OFF Camera",
  },
  {
    img: closedCaptionSVG,
    hoverText: "Turn on captions",
  },
  {
    img: screenShareSVG,
    hoverText: "Present now",
  },
  {
    img: infoSVG,
    hoverText: "More Options",
  },
  {
    img: leaveCallSVG,
    hoverText: "Leave call",
    color: "red",
  },
];

function MeetControls() {
  return (
    <div>
      <div className="flex space-x-4">
        {controlsSetting.map((e) => {
          return (
            <div className="p-2 bg-gray-500 box-border rounded-full">
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

export default MeetControls;

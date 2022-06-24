import micSVG from "../../IconsSVG/mic.svg";
import videoSVG from "../../IconsSVG/videoCall.svg";
import closedCaptionSVG from "../../IconsSVG/closedCaption.svg";
import screenShareSVG from "../../IconsSVG/screenShare.svg";
import moreSVG from "../../IconsSVG/more.svg";
import leaveCallSVG from "../../IconsSVG/leaveCall.svg";
import classNames from "classnames";
import { Menu } from "@headlessui/react";
import Modal from "../Modal";

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
    modal: "modal01",
    data: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet",
    ],
  },
  {
    img: moreSVG,
    hoverText: "More Options",
    modal: "modal02",
    data: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
    ],
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
      <div className="flex justify-center  space-x-4">
        {controlsSetting.map((e) => {
          return (
            <div
              className={classNames(
                "p-2 bg-neutral-700 hover:bg-neutral-600 relative box-border rounded-full cursor-pointer",
                {
                  "bg-red-700 rounded-3xl box-content hover:bg-red-500":
                    e.hoverText === "Leave call",
                }
              )}
              key={e.hoverText}
            >
              <p className="hidden absolute hover:visible invisible top-0 text-sm text-red-800">
                {e.hoverText}
              </p>
              {e.modal ? (
                <Modal img={e.img} data={e.data} modal={e.modal} />
              ) : (
                <img
                  src={e.img}
                  width={22}
                  height={22}
                  className="cursor-pointer box-border"
                  alt={e.hoverText}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MeetControls;

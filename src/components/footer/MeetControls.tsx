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
    text: "Turn ON/OFF Microphone",
  },
  {
    img: videoSVG,
    text: "Turn ON/OFF Camera",
  },
  {
    img: closedCaptionSVG,
    text: "Turn on captions",
  },
  {
    img: screenShareSVG,
    text: "Present now",
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
    text: "More Options",
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
    text: "Leave call",
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
                    e.text === "Leave call",
                }
              )}
              key={e.text}
            >
              {e.modal ? (
                <Modal img={e.img} data={e.data} modal={e.modal} />
              ) : (
                <img
                  src={e.img}
                  width={22}
                  height={22}
                  className="cursor-pointer box-border"
                  alt={e.text}
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

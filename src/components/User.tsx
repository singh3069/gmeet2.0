import classNames from "classnames";
import micSVG from "../IconsSVG/mic.svg";
import offMicSVG from "../IconsSVG/offMic.svg";
import Sidebar from "./Sidebar";

const userData = [
  {
    img: "https://avatars.githubusercontent.com/u/73482745?v=4",
    name: "Saurabh",
    mic: micSVG,
  },
  {
    img: "https://repository-images.githubusercontent.com/355841902/21311500-9881-11eb-96e0-7d6ac8d1b48e",
    name: "Harry Potter",
    mic: offMicSVG,
  },
  {
    img: "https://i.pinimg.com/originals/0c/fb/a6/0cfba6d0adc1c86ac536dc1a1ec795a7.jpg",
    name: "Ron Weasley",
    mic: offMicSVG,
  },
  {
    img: "https://i1.sndcdn.com/avatars-000293556165-63ie4j-t500x500.jpg",
    name: "Hermione Granger",
    mic: offMicSVG,
  },
  {
    img: "https://www.giantbomb.com/a/uploads/square_small/46/462814/3187899-5431433650-latest",
    name: "Fred Weasley",
    mic: offMicSVG,
  },
  {
    img: "https://i1.sndcdn.com/artworks-mJ2NYXcxL5kvUaTc-oEDzPQ-t500x500.jpg",
    name: "Bill Weasley",
    mic: offMicSVG,
  },
  {
    img: "https://pbs.twimg.com/profile_images/1298380607068745729/t65sdSut_400x400.jpg",
    name: "Draco Malfoy",
    mic: offMicSVG,
  },
  {
    img: "https://akns-images.eonline.com/eol_images/Entire_Site/2021117/rs_1200x1200-210217113937-1200-Bonnie-Wright-Harry-Potter-LT-21721-20070101_zva_a90_5332.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    name: "Ginny Weasley",
    mic: offMicSVG,
  },
];
function User({ isOpen, setIsOpen }: any) {
  return (
    <div
      className={classNames(
        "w-auto transition-[margin] mr-0 ease-in-out px-5 mt-20 mb-10 md:mt-0 md:mb-0 duration-300 h-screen",
        {
          "mr-80 mt-0 mb-0": isOpen,
        }
      )}
    >
      <div
        className={classNames(
          " h-full w-full grid lg:grid-rows-2  justify-center gap-3 lg:pb-8 grid-flow-row grid-cols-2  lg:grid-cols-4 lg:gap-2.5 text-center ",
          {
            "lg:grid-rows-3 lg:grid-cols-3 invisible sm:visible": isOpen,
          }
        )}
      >
        {userData.map((e) => {
          return (
            <div
              key={e.name}
              className={classNames(
                "box-border w-full  border border-black md:my-6 lg:mx-auto rounded-md cursor-pointer shadow-2xl bg-zinc-800 space-y-5 sm:p-2 flex flex-col justify-center items-center",
                {
                  "h-full ": isOpen,
                }
              )}
            >
              <div className="w-full  flex justify-end">
                <div className="p-2 hover:bg-neutral-700 relative box-border rounded-full cursor-pointer">
                  <img
                    src={e.mic}
                    alt="mic"
                    width={18}
                    height={18}
                    className=""
                  />
                </div>
              </div>

              <img
                src={e.img}
                alt={e.name}
                width={108}
                height={80}
                className="rounded-full"
              />
              <p className="text-white w-full flex items-end">{e.name}</p>
            </div>
          );
        })}
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default User;

const userData = [
  {
    img: "https://avatars.githubusercontent.com/u/73482745?v=4",
    name: "Saurabh",
  },
  {
    img: "https://repository-images.githubusercontent.com/355841902/21311500-9881-11eb-96e0-7d6ac8d1b48e",
    name: "Harry Potter",
  },
  {
    img: "https://i.pinimg.com/originals/0c/fb/a6/0cfba6d0adc1c86ac536dc1a1ec795a7.jpg",
    name: "Ron Weasley",
  },
  {
    img: "https://i1.sndcdn.com/avatars-000293556165-63ie4j-t500x500.jpg",
    name: "Hermione Granger",
  },
  {
    img: "https://www.giantbomb.com/a/uploads/square_small/46/462814/3187899-5431433650-latest",
    name: "Fred Weasley",
  },
  {
    img: "https://i1.sndcdn.com/artworks-mJ2NYXcxL5kvUaTc-oEDzPQ-t500x500.jpg",
    name: "Bill Weasley",
  },
  {
    img: "https://pbs.twimg.com/profile_images/1298380607068745729/t65sdSut_400x400.jpg",
    name: "Draco Malfoy",
  },
  {
    img: "https://akns-images.eonline.com/eol_images/Entire_Site/2021117/rs_1200x1200-210217113937-1200-Bonnie-Wright-Harry-Potter-LT-21721-20070101_zva_a90_5332.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    name: "Ginny Weasley",
  },
];
function User() {
  return (
    <div className="w-full h-screen ">
      <div className=" h-full grid lg:grid-rows-2 gap-3 lg:p-20 grid-flow-row grid-cols-2  lg:grid-cols-4 lg:gap-2.5 text-center  ">
        {userData.map((e) => {
          return (
            <div
              key={e.name}
              className="box-border w-full  border border-black my-6 lg:mx-auto rounded-md cursor-pointer shadow-2xl bg-zinc-800 space-y-2 p-4 flex flex-col justify-center items-center"
            >
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
    </div>
  );
}

export default User;

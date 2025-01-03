export function Home() {
  return (
    <div id="home" className="hero min-h-48 h-[100vh] scroll-mt-[80px]">
      <div className="flex flex-col justify-center items-center hero-content text-center w-[100%]">
        <h1 className="flex justify-center items-center text-6xl font-bold m-[15px] w-[900px]">
          Hello, I'm Austin.
        </h1>
        <h1 className="text-6xl font-bold pb-6 m-[15px] w-[900px]">
          I'm a full stack developer.
        </h1>
        <a href="#about">
          <button className="btn btn-primary m-[20px]">View my work</button>
        </a>
      </div>
    </div>
  );
}

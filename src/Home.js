export function Home() {
  return (
    <div id="home" className="hero min-h-48 h-[100vh] scroll-mt-[80px]">
      <div className="flex flex-col justify-center items-center hero-content text-center md:w-[100%]">
        <h1 className="flex justify-center items-center text-3xl md:text-6xl font-bold md:m-[15px] md:max-w-[900px]">
          Hello, I'm Austin.
        </h1>
        <h1 className="text-3xl md:text-6xl font-bold md:pb-6 md:m-[15px] md:max-w-[900px]">
          I'm a full stack developer.
        </h1>
        <a href="#about">
          <button className="btn btn-primary md:m-[20px]">View my work</button>
        </a>
      </div>
    </div>
  );
}

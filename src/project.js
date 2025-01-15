export function Projects() {
  return (
    <section className="scroll-mt-[80px] mt-[100px] md:mt-[0px]" id="projects">
      <div>
        <h1 className="text-5xl font-bold w-96 mx-auto flex items-center justify-center md:mt-[125px] md:mb-[70px]">
          Projects
        </h1>

        <div className="flex justify-center items-center">
          <a href="https://austinsmittlephotography.com/">
            <img
              src="/img/projects.png"
              alt="photoBlog"
              className="w-[300px] h-[300px] md:w-[800px] md:h-[600px] mt-[25px] md:mt-[0px] mb-[100px] object-cover"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
}

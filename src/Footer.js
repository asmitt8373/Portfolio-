export function Footer() {
  return (
    <div className="flex flex-rows  justify-center items-center mt-[100px] mb-[100px] md:mt-[125px] md:mb-[100px]">
      <div className="mr-[40px]">
        <a href="https://github.com/asmitt8373">
          <img
            src="/img/github.png"
            className=" h-[50px] w-[50px] md:h-[75px] md:w-[75px]"
            alt="github"
          />
        </a>
      </div>
      <div>
        <a href="mailto:austinsmittle8373@gmail.com">
          <img
            src="/img/mail.png"
            alt="mail"
            className="h-[50px] w-[50px] md:h-[75px] md:w-[75px]"
          />
        </a>
      </div>
    </div>
  );
}

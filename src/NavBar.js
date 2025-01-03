export function NavBar() {
  console.log("test");
  return (
    <div
      id="nav-bar"
      className="fancy-border sticky top-0 z-50 w-4/5 md:w-1/2 h-20 rounded-full bg-sunset text-white mx-auto m-[10px] md:m-[30px] flex items-center justify-center"
    >
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="btn m-1">
          Navigation
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="btn m-1">
          Social
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a href="https://github.com/asmitt8373">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/austin-smittle/">Linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section className="flex flex-col scroll-mt-[100px] mb-[100px]" id="about">
      <h1 className="md:text-5xl font-bold md:w-96 mx-auto flex items-center justify-center md:m-[20px] md:ml-[135px] mt-[25px] mb-[25px]">
        About
      </h1>
      <div className="md:mx-8 flex md:w-[90vw] mx-auto">
        <div className="flex-col md:w-[50%] justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src="/img/austin.png"
              alt="me"
              className="h-[300px] w-[200px] md:h-[400px] md:w-[400px] md:mr-[150px] md:m-[40px] object-cover rounded-[10px]"
            />
          </div>
          <p className="md:w-100 text-xs md:text-2xl md:m-[40px] mt-[25px]">
            I’m a full stack developer with a deep passion for JavaScript,
            React, Sql and all things web development.The unique combination of
            creativity, logic, technology and never running out of new things to
            discover, drives my excitement and passion for web development. When
            I’m not at my computer I like to spend my time taking photos,
            skateboarding and of course traveling to new places.
          </p>
        </div>
        <div className="flex md:w-[50%] ml-[10px] md:ml-[0px]">
          <div className="flex flex-col justify-center items-center grow ml-[10px] md:ml-[0px]">
            <div className="mb-[10px] md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex justify-center md:m-[10px]">
                <img
                  src="/img/html.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
                  alt="html"
                />
              </div>
              <div>
                <h1 className="flex flex-col justify-center items-center grow md:text-l text-xs font-bold md:mb-[5px] md:mx-[20px]">
                  HTML
                </h1>
              </div>
            </div>
            <div className="mb-[10px] md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex justify-center md:m-[10px]">
                <img
                  src="/img/css1.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
                  alt="css"
                />
              </div>
              <div>
                <h1 className="flex flex-col justify-center items-center grow md:text-l text-xs font-bold md:mb-[5px] md:mx-[20px]">
                  CSS
                </h1>
              </div>
            </div>
            <div className="md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex justify-center md:m-[10px]">
                <img
                  src="/img/tailwind.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
                  alt="tailwind"
                />
              </div>
              <div>
                <h1 className="flex flex-col justify-center items-center md:text-l text-xs font-bold md:mb-[5px] md:mx-[20px]">
                  Tailwind
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center grow ml-[5px] mr-[5px]">
            <div className="mb-[10px] md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex justify-center md:m-[10px]">
                <img
                  src="/img/react.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[100px]"
                  alt="react"
                />
              </div>
              <h1 className="flex flex-col justify-center items-center md:text-l text-xs font-bold md:mb-[5px] md:mx-[20px]">
                React
              </h1>
            </div>
            <div className="mb-[10px] md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex justify-center md:m-[10px]">
                <img
                  src="/img/javascript.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
                  alt="javascript"
                />
              </div>
              <h1 className="flex flex-col justify-center items-center md:text-l text-xs font-bold md:mb-[5px] md:mx-[20px]">
                JavaScript
              </h1>
            </div>
            <div className="mb-[10px] md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex justify-center md:m-[10px]">
                <img
                  src="/img/git.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[100px]"
                  alt="git"
                />
              </div>
              <h1 className="flex flex-col justify-center items-center md:text-l text-xs font-bold md:mb-[5px] md:mx-[20px]">
                Git
              </h1>
            </div>
            <div className="md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex justify-center md:m-[10px]">
                <img
                  src="/img/mongo.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[100px]"
                  alt="mongo"
                />
              </div>
              <h1 className="flex flex-col justify-center items-center md:text-l text-xs font-bold md:mb-[5px] md:mx-[20px]">
                MongoDB
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center grow">
            <div className="mb-[10px] md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex flex-col md:m-[10px]">
                <img
                  src="/img/python.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
                  alt="python"
                />
              </div>
              <h1 className="flex flex-col justify-center items-center md:text-l text-xs font-bold md:mb-[5px] md:mx-[20px]">
                Python
              </h1>
            </div>
            <div className="mb-[10px] md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex justify-center md:m-[10px]">
                <img
                  src="/img/sql.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
                  alt="sql"
                />
              </div>
              <h1 className="flex flex-col justify-center items-center md:text-l text-xs font-bold md:mb-[5px] md:mx-[20px]">
                Sql
              </h1>
            </div>
            <div className="md:m-[20px] fancy-border rounded-[10px]">
              <div className="flex justify-center md:m-[10px]">
                <img
                  src="/img/node.png"
                  className="md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
                  alt="node"
                />
              </div>
              <div>
                <h1 className="flex flex-col justify-center items-center text-l font-bold md:mb-[5px] md:mx-[20px]">
                  NodeJs
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

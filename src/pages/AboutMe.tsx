
const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="max-w-[90%]  px-6 py-12 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Pramod's Web Development Journey!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          👋 Hello and welcome to my corner of the web! I'm Pramod, a passionate web developer on a continuous journey of learning and growth in the ever-evolving world of technology.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          On this website, you'll find a curated collection of my experiences, projects, and insights into advanced web development concepts. Whether you're a fellow developer seeking inspiration, a potential client looking for expertise, or simply curious about the exciting realm of web development, I'm thrilled to have you here.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            What to Expect
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-700 mb-2">
              <strong>Insights and Tutorials:</strong> Dive into my blog posts and articles where I share practical tips, tutorials, and in-depth insights on advanced web development topics. From mastering the latest JavaScript frameworks to implementing cutting-edge design patterns, there's something for every curious mind.
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Project Showcase:</strong> Explore a portfolio of my web development projects, ranging from innovative personal endeavors to collaborative ventures. Each project is a testament to my dedication, creativity, and technical prowess in crafting engaging digital experiences.
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Expertise and Services:</strong> Learn more about my expertise in web development and the services I offer. Whether you're looking for consultation, custom solutions, or collaboration opportunities, I'm here to help you bring your vision to life with precision and expertise.
            </li>
            <li className="text-gray-700 mb-2">
              <strong>Engagement and Community:</strong> Join me on this exciting journey of exploration and discovery. Subscribe to my newsletter for regular updates, follow me on social media for behind-the-scenes insights, and become part of a vibrant community passionate about leveraging technology to shape the future.
            </li>
          </ul>
        </div>
        <p className="text-lg text-gray-700">
          Let's innovate, create, and build the future of the web, one line of code at a time!
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Happy coding! 🚀
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

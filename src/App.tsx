import "tailwindcss/tailwind.css";
import ViteLogo from "./assets/images/ViteLogo";
import ReactLogo from "./assets/images/ReactLogo";
import TailwindLogo from "./assets/images/TailwindLogo";

function App() {
  return (
    <>
      <main className="w-[80%] max-w-lg p-5 flex flex-col justify-center items-center">
        <section className="mb-5 text-center">
          <h1 className="font-semibold text-lg sm:text-xlg">
            Vite: React & Tailwind
          </h1>
          <h2>Basic Configuration</h2>
        </section>
        <section className="w-full grid grid-cols-3">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <ReactLogo className="px-3" />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <TailwindLogo className="px-3" />
          </a>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <ViteLogo className="px-3" />
          </a>
        </section>
        <section className="text-center">
          <p className="my-4">
            This proyect will provide a template to work with React and Tailwind
            using Vite.
          </p>
          <p className="my-4">
            If you want to have more information, you can click on the icons of
            each technology, you will open the official documentation in an
            additional tab.
          </p>
          <p className="my-4">
            On the other hand, to know the code of this project, you can visit:
          </p>
          <a
            className="text-blue-700 my-4"
            href="https://github.com/Jengrik/vite-react-tailwind-basic-setup"
          >
            https://github.com/Jengrik/vite-react-tailwind-basic-setup
          </a>
          <p className="text-right my-8">Designed by: Jhon Navarrete</p>
        </section>
      </main>
    </>
  );
}

export default App;

import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handlegohome = () => {
    navigate("/");
  };
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
      <main className="grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-[100vh]">
        <div className="text-center space-y-16">
          <p className="text-6xl font-semibold">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-2xl leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <p
              className="rounded-md bg-[#ff0068] px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-[#ff0068] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:cursor-pointer"
              onClick={handlegohome}
            >
              Go back home
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

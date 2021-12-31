import React from "react";

import Countries from "./components/Countries";

const App = () => {
  return (
    <>
      <div className="bg-blue-100">
        <header className="text-3xl text-center font-bold pt-6">Countries</header>
        <div className="flex justify-center pb-2">
          <div className="flex flex-col">
            <div className="flex-grow">
              <div className="m-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-8">
                <Countries />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

import React from "react";

const underMaintainance = () => {
  return (
    <section className="section flex justify-center">
      <div className="flex flex-col gap-3 justify-center items-center text-center max-w-screen-xl border border-zinc-900 dark:border-white/50 shadow-lg shadow-teal-600 p-10 rounded-3xl">
        <h2>
          The page you're trying to access is currently under maintenance.
          Please check back later.
        </h2>
        <p className="">
          We’re working to improve your experience. Thanks for your patience.
        </p>
      </div>
    </section>
  );
};

export default underMaintainance;

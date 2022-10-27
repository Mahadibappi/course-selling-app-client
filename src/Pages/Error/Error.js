import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div className="flex ">
        <h1 className="">Sorry! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className="">{error.statusText || error.message}</p>
            <p className="">{error.status}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Error;

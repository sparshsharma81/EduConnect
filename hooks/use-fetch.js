//basicallly when we are creating a react application..
//then we neeed to manage a lot of states..use states ..loading states..
 //so in order to prevent the excessive work..
 //hamne ne use-fetch.js create kiya hai api k liye
 //so we are creating custom hooks....

 import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {  ///these ...args are varargs
    ///before fetching our api..hame setloading ko true rakhna hoga..  //defaut value to true hogi...
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;
import { useEffect, useState } from "react";

export const useSum = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [sum, setSum] = useState("");

  useEffect(() => {
    try {
      setSum(parseInt(first) + parseInt(second));
    } catch (error) {
      setSum("");
    }
  }, [first, second]);

  return { first, second, sum, setFirst, setSecond };
};

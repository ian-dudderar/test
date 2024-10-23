import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [salesTotal, setSalesTotal] = useState(0);
  const [goalReached, setGoalReached] = useState(false);

  const SALES_GOAL = 100000;
  const startVal = useRef(0);
  const countupRef = useRef(null);

  const options = { decimalPlaces: 2, startVal: startVal.current };

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:8080"); // Your WebSocket server URL
  //   setSocket(ws);

  //   ws.onopen = () => {
  //     console.log("WebSocket connection established");
  //   };

  //   ws.onmessage = (event) => {
  //     setSalesTotal((prev) => prev + parseFloat(event.data));
  //   };

  //   ws.onclose = () => {
  //     console.log("WebSocket connection closed");
  //   };

  //   fetch("../api/sales")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setSalesTotal(data.total);
  //     });

  //   // Cleanup the WebSocket connection on component unmount
  //   return () => {
  //     ws.close();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (salesTotal === 0) return;
  //   if (salesTotal >= 100000) {
  //     setGoalReached(true);
  //   }

  //   initCountUp(salesTotal);
  // }, [salesTotal]);

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  // you don't have to import this way, but this works best for next.js

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <h1>Hello</h1>
      </div>
    </>
  );
}

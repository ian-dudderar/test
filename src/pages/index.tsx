import { CountUp } from "countup.js";
import { useEffect, useState, useRef } from "react";
import Sales from "./components/Sales";
import Image from "next/image";

export default function Home() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [salesTotal, setSalesTotal] = useState(0);

  const startVal = useRef(0);
  const countupRef = useRef(null);
  let countUpAnim: CountUp;

  const options = { decimalPlaces: 2, startVal: startVal.current };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); // Your WebSocket server URL
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onmessage = (event) => {
      setSalesTotal((prev) => prev + parseFloat(event.data));
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    fetch("../api/sales")
      .then((response) => response.json())
      .then((data) => {
        setSalesTotal(data.total);
      });

    // Cleanup the WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (salesTotal === 0) return;

    initCountUp(salesTotal);
  }, [salesTotal]);

  // dynamically import and initialize countUp, sets value of `countUpAnim`
  // you don't have to import this way, but this works best for next.js
  async function initCountUp(salesTotal: number) {
    if (salesTotal === 0) return;
    const countUpModule = await import("countup.js");
    if (countupRef.current) {
      countUpAnim = new countUpModule.CountUp(
        countupRef.current,
        salesTotal,
        options
      );
      if (!countUpAnim.error) {
        countUpAnim.start();
        startVal.current = salesTotal;
      } else {
        console.error(countUpAnim.error);
      }
    } else {
      console.error("countupRef.current is null");
    }
  }

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <Sales currentAmount={salesTotal} goalAmount={100000} />
      </div>
    </>
  );
}

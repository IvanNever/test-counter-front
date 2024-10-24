import { useEffect, useRef, useState } from "react";
import { SocketManager } from "../infrastructure/socket.ts";

interface ICounter {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export function useCounter(): ICounter {
  const [count, setCount] = useState<number>(0);
  const socketManager = useRef<SocketManager | null>(null);

  useEffect(() => {
    if (socketManager.current) {
      socketManager.current.updateData({ count });
    }
  }, [count]);

  useEffect(() => {
    socketManager.current = new SocketManager({ count });

    return () => {
      socketManager.current?.close();
    };
  }, []);

  function increase() {
    setCount((value) => value + 1);
  }

  function decrease() {
    if (count === 0) return;
    setCount((value) => value - 1);
  }

  return { count, increase, decrease };
}

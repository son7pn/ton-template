import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";

import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
  Button,
  Title,
  BoxClickCoin,
} from "./styled/styled";
import { useEffect, useState } from "react";
import LogoCoin from '../../public/logo-coin.png';

export function Counter() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  const formatPrice = (value: number) => {
    return value ? value.toLocaleString("en-US") : "0";
  };

  const [countCoin, setCount] = useState(0);
  const [animations, setAnimations] = useState<any>([]);

  useEffect(() => {
    const countLocal = localStorage.getItem('ton_coin') ?? null
    if (countLocal) {
      setCount(Number(countLocal))
    }
  }, [])

  const handleClick = (event: any) => {
    setCount(countCoin + 1);
    localStorage.setItem('ton_coin', JSON.stringify(countCoin + 1)) 

    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newAnimation = {
      id: Date.now(),
      x: x,
      y: y,
      text: '+1'
    };

    setAnimations([...animations, newAnimation]);

    // Remove the animation after it ends (1s duration)
    setTimeout(() => {
      setAnimations((animations: any) => animations.filter((anim: any) => anim.id !== newAnimation.id));
    }, 1000);
  };

  return (
    <div className="Container">
      <TonConnectButton />

      <Title>Click to collect gems!</Title>
      <Card>
        <FlexBoxRow style={{ justifyContent: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 14 12" fill="none">
            <path
              d="M8.3335 0.75L10.3335 4.25L7.00016 11.25"
              stroke="#FAAE1A"
              stroke-width="0.54"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.6665 0.75L3.6665 4.25L6.99984 11.25"
              stroke="#FAAE1A"
              stroke-width="0.54"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.3333 0.75H3.66667L1 4.25L7 11.25L13 4.25L10.3333 0.75Z"
              stroke="#FAAE1A"
              stroke-width="0.54"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 4.25H13"
              stroke="#FAAE1A"
              stroke-width="0.54"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span style={{ fontSize: 20, fontWeight: 600, color: '#FFF'}}>{formatPrice(countCoin)}</span>
        </FlexBoxRow>
      </Card>
      <BoxClickCoin onClick={handleClick} avatar={LogoCoin}>
        {animations.map((animation: any) => (
          <span
            key={animation.id}
            className="number-animation animate"
            style={{ left: animation.x, top: animation.y, zIndex: 10 }}
          >
            {animation.text}
          </span>
        ))}
      </BoxClickCoin>
    </div>
  );
}

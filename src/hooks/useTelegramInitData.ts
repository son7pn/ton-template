import { useEffect, useState } from "react";
import { TelegramWebApps } from "telegram-webapps-types";
import WebApp from '@twa-dev/sdk'
/**
 * Hook to get the initial data from the Telegram Web Apps API already parsed.
 * @example
 * const { hash } = useTelegramInitData();
 * console.log({ hash });
 */
export function useTelegramInitData() {
  const [data, setData] = useState<TelegramWebApps.WebAppInitData>({});
 
  useEffect(() => {

    console.log('WebApp.initData: ', WebApp.initData);
    
    const firstLayerInitData = Object.fromEntries(
      new URLSearchParams(WebApp.initData)
    );
 
    const initData: Record<string, string> = {};
 
    for (const key in firstLayerInitData) {
      try {
        initData[key] = JSON.parse(firstLayerInitData[key]);
      } catch {
        initData[key] = firstLayerInitData[key];
      }
    }
 
    setData(initData);
  }, []);
 
  return data;
}
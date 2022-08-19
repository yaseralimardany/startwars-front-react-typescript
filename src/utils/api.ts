import axios from 'axios';
import { getConfig } from "./config";

export type FetchResponse = {
  error: boolean,
  data: any,
}

export async function fetchByUrl(url: string): Promise<FetchResponse> {
  try {
    const response: any = await axios(getConfig().baseUrl + url);
    console.log("response", response.data);
    return { error: false, data: response.data };
  } catch (e) {
    console.error("Error happened on fetchByUrl", new Date(), e);
  }
  return { error: true, data: null };
}
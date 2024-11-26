import type { MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Event = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  images: MicroCMSImage[];
};
export type EventResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Event[];
};

export type University = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  link_instagram: string;
  link_x: string;
  link_homepage: string;
  link_welcome: string;
  content: string;
  image: MicroCMSImage;
};
export type UniversityResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: University[];
};

//APIの呼び出し
export const getEvents = async (queries?: MicroCMSQueries) => {
  console.log("getEvents");
  return await client.get<EventResponse>({ endpoint: "events", queries });
};
export const getEventDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Event>({
    endpoint: "events",
    contentId,
    queries,
  });
};

export const getUniversities = async (queries?: MicroCMSQueries) => {
  console.log("getUniversities");
  return await client.get<UniversityResponse>({
    endpoint: "universities",
    queries,
  });
};
export const getUniversityDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<University>({
    endpoint: "universities",
    contentId,
    queries,
  });
};

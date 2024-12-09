import type { MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client1 = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});
//client1に含まれる情報：about,tournaments,events

const client2 = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN2,
  apiKey: import.meta.env.MICROCMS_API_KEY2,
});
//client2に含まれる情報：top-images,admission,universities

//型定義
export type Event = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  description: string;
  images: MicroCMSImage[];
  og_image: MicroCMSImage;
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
  image: MicroCMSImage;
  description: string;
  content: string;
  link_instagram: string;
  link_x: string;
  link_homepage: string;
  link_welcome: string;
};
export type UniversityResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: University[];
};

export type About = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  description: string; //topページで使用
  content: string;
  images: MicroCMSImage[];
};
export type AboutResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: About[];
};

export type Tournament = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  content: string;
  images: MicroCMSImage[];
  og_image: MicroCMSImage;
};
export type TournamentResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Tournament[];
};

export type TopImages = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  carousel: MicroCMSImage[];
  universities: MicroCMSImage;
  events: MicroCMSImage;
  about: MicroCMSImage;
  contact: MicroCMSImage;
  tournaments: MicroCMSImage;
};
export type TopImagesResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: TopImages[];
};

export type Admission = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  firstStep: string;
  secondStep: string;
  thirdStep: string;
  firstStepGroup: string;
  secondStepGroup: string;
  thirdStepGroup: string;
};
export type AdmissionResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Admission[];
};

//APIの呼び出し
export const getEvents = async (queries?: MicroCMSQueries) => {
  console.log("getEvents");
  return await client1.get<EventResponse>({ endpoint: "events", queries });
};
export const getEventDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client1.getListDetail<Event>({
    endpoint: "events",
    contentId,
    queries,
  });
};

export const getUniversities = async (queries?: MicroCMSQueries) => {
  console.log("getUniversities");
  return await client2.get<UniversityResponse>({
    endpoint: "universities",
    queries,
  });
};
export const getUniversityDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client2.getListDetail<University>({
    endpoint: "universities",
    contentId,
    queries,
  });
};

export const getAbout = async (queries?: MicroCMSQueries) => {
  console.log("getAbout");
  return await client1.get<AboutResponse>({
    endpoint: "about",
    queries,
  });
};
export const getAboutDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client1.getListDetail<About>({
    endpoint: "about",
    contentId,
    queries,
  });
};

export const getTournaments = async (queries?: MicroCMSQueries) => {
  console.log("getTournaments");
  return await client1.get<TournamentResponse>({
    endpoint: "tournaments",
    queries,
  });
};
export const getTournamentDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client1.getListDetail<Tournament>({
    endpoint: "tournaments",
    contentId,
    queries,
  });
};

export const getTopImages = async (queries?: MicroCMSQueries) => {
  console.log("getTopImages");
  return await client2.get<TopImagesResponse>({
    endpoint: "top-images",
    queries,
  });
};
export const getTopImagesDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client2.getListDetail<TopImages>({
    endpoint: "top-images",
    contentId,
    queries,
  });
};

export const getAdmissions = async (queries?: MicroCMSQueries) => {
  console.log("getAdmissions");
  return await client2.get<AdmissionResponse>({
    endpoint: "admission",
    queries,
  });
};
export const getAdmissionDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client2.getListDetail<TopImages>({
    endpoint: "admission",
    contentId,
    queries,
  });
};

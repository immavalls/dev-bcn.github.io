export const ROUTE_HOME = '/devBcn';
export const ROUTE_TALKS = '/devBcn/talks';
export const ROUTE_CODE_OF_CONDUCT = '/devBcn/codeOfConduct';
export const ROUTE_JOB_OFFERS = '/devBcn/jobOffers';
export const ROUTE_SCHEDULE = '/devBcn/schedule';
export const ROUTE_SPEAKERS = '/devBcn/speakers';
export const ROUTE_ABOUT_US = '/devBcn/aboutUs';
export const ROUTE_MEETING_DETAIL_PLAIN = '/devBcn/meetingDetail/:name';
export const ROUTE_SPEAKER_DETAIL_PLAIN = '/devBcn/speakerDetail/:name';
export const ROUTE_MEETING_DETAIL = (name: string) =>
  `/devBcn/meetingDetail/${name}`;
export const ROUTE_SPEAKER_DETAIL = (name: string) =>
  `/devBcn/speakerDetail/${name}`;

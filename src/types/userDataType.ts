import { ConsultationType } from "./consultationType";
import { EventType } from "./eventType";
import { noticeType } from "./noticeType";
import { VideoType } from "./videoType";

export type UserDataType = {
    id: number;
    name: string;
    photo: string;
    sex: string;
    age: number;
    notices: noticeType[];
    consultations: ConsultationType[];
    videos: VideoType[];
    events: EventType[];
    isNewSessions: boolean;
}
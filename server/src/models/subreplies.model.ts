import {Schema , model , Document} from "mongoose";

export interface ISubReplies extends Document{
    owner : Schema.Types.ObjectId;
    parentComment : Schema.Types.ObjectId;
    subReplyBody : string;
}
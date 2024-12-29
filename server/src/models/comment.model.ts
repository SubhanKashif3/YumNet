import {Schema , model , Document} from "mongoose";

export interface IComment extends Document{
    owner : Schema.Types.ObjectId;
    commentBody : string;
    recipe : Schema.Types.ObjectId;
}
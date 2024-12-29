import {Schema , Document , model} from "mongoose";

export interface ISubscription extends Document{
    user : Schema.Types.ObjectId;
    targetUser : Schema.Types.ObjectId;
}
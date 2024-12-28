import {Schema , model , Document} from "mongoose";

export interface IRecipe extends Document{
    title : string;
    owner : Schema.Types.ObjectId;
    description? : string;
    ingredients : string[],
    instruction : string;
    video? : Schema.Types.ObjectId;
    thumbnail : string;
    tags : string[]
}
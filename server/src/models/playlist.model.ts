import {Schema , model , Document} from "mongoose";


export interface IPlaylist{
    owner : Schema.Types.ObjectId;
    videos : Schema.Types.ObjectId[];
    
}
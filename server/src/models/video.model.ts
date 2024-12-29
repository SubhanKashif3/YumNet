import {Schema , model , Document} from "mongoose";

export interface IVideo extends Document{
    url : string;
    duration : string;   
};
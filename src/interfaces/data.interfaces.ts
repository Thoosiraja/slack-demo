import { Time } from "@angular/common";

export interface IChannels {
    id: number,
    type: string,
    name: string,
    isRead: boolean,
    membersID: Array<number>,
    messagesID: Array<number>
}

export interface IDirectDM{
    id: number,
    name: string,
    isRead: boolean,
    messagesID: Array<number>
}

export interface IMessages{
    from:string,
    toType:string,
    toID:number,
    date:Date,
    time:Time,
    messages:string
}
export interface IProfile{
    name:string,
    status:string,
    title:string,
    phoneNumber:number,
    emailAddress:string
}

export interface IData{
    name:string,
    profile:IProfile,
    channels:Array<IChannels>,
    directMessages:Array<IDirectDM>,
    messages:Object
}
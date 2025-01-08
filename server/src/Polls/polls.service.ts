import { Injectable } from "@nestjs/common";
import { createPollID, createUserID} from "src/ids";
import {CreatePollField, JoinPollField, RejoinPollField} from "./types";

@Injectable()
export class PollsService {

    async createPoll(fields : CreatePollField) {
        const pollID = createPollID();
        const userID = createUserID();

        return {...fields,pollID, userID};
    }

    async joinPoll(fields : JoinPollField) {
        const userID = createUserID();
        return {...fields,userID};
    }

    async rejoinPoll(fields : RejoinPollField) {
        const userID = createUserID();
        return {userID};
    }
    

    
}
    
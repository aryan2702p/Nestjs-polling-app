export type CreatePollField={
    topic : string,
    votesPerVoter : number,
    name : string

}

export type JoinPollField={
    pollId : string,
    name : string
}

export type RejoinPollField={
    pollID : string,
    userID : string,
    name : string

}

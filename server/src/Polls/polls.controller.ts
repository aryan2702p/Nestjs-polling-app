import { Body, Controller, Get, Logger, Post } from "@nestjs/common";

import { CreatePollDto, joinPollDto } from "./dtos";
import { PollsService } from "./polls.service";

@Controller('polls')
export class PollsController {


    constructor(private pollsService: PollsService) {}

    @Post()
    async createPoll(@Body() createPollDto: CreatePollDto) {
        const result = await this.pollsService.createPoll(createPollDto);
        return result;
    }

    @Get()
    async getPolls() {
        Logger.log('Getting all polls');
        return "get polls"
    }

    @Post('join')
    async join(@Body() joinPollDto: joinPollDto) {
        const result = await this.pollsService.joinPoll(joinPollDto);
        return result;
    }

    @Post('rejoin')
    async rejoin(@Body() joinPollDto: joinPollDto) {
        Logger.log('Rejoining a poll');
        return joinPollDto;
    }


    
}
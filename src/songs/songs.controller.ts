import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  getSongs() {
    return 'songs';
  }

  @Get(':id')
  getSong(@Param('id') id: string) {
    return `song ${id}`;
  }

  @Post()
  createSong(@Body() body: any) {
    return body;
  }

  @Put(':id')
  updateSong(@Param('id') id: string, @Body() body: any) {
    return `update song ${id} with ${body}`;
  }

  @Delete(':id')
  deleteSong(@Param('id') id: string) {
    return `delete song ${id}`;
  }
}

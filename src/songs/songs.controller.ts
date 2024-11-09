import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connection';

@Controller('songs')
export class SongsController {
  constructor(
    private readonly songsService: SongsService,
    @Inject('CONNECTION') private connection: Connection,
  ) {
    console.log(this.connection);
  }
  @Get()
  getSongs() {
    try {
      return this.songsService.getAllSongs();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  getSong(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `fetching song based on typeof i.e, ${typeof id}`;
  }

  @Post()
  createSong(@Body() createSongDto: CreateSongDto) {
    this.songsService.create(createSongDto);
    return createSongDto;
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

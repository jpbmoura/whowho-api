import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album, Rating } from './album.types';

@Controller('/album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get('/todays')
  @HttpCode(200)
  getTodayAlbum(): Promise<Album> {
    return this.albumService.getTodayAlbum();
  }

  @Get('/random')
  @HttpCode(200)
  getRandomAlbum(): Promise<Album> {
    return this.albumService.getRandomAlbum();
  }

  @Put('/update-todays-album')
  @HttpCode(200)
  updateTodayAlbum() {
    return this.albumService.updateTodayAlbum();
  }

  @Delete('/clear-seen-albums')
  @HttpCode(200)
  clearSeenAlbums() {
    return this.albumService.clearSeenAlbums();
  }

  //rating routes
  @Post('/rate')
  @HttpCode(200)
  rateAlbum(@Body() body: { albumId: number; rating: number }) {
    return this.albumService.rateAlbum(body);
  }

  @Get('/rating/:albumId')
  @HttpCode(200)
  getRating(@Param('albumId') albumId: string): Promise<Rating> {
    return this.albumService.getRating(Number(albumId));
  }
}

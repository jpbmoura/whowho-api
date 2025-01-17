import { Controller, Delete, Get, HttpCode, Put } from '@nestjs/common';
import { AlbumService } from './album.service';

@Controller('/album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get('/todays')
  @HttpCode(200)
  getTodayAlbum() {
    return this.albumService.getTodayAlbum();
  }

  @Get('/random')
  @HttpCode(200)
  getRandomAlbum() {
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
}

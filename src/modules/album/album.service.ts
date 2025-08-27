import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Album } from './album.types';
import { AlbumRepository } from './album.repository';
import { getRandomItem } from 'src/helpers/functions/get-random-item';

@Injectable()
export class AlbumService {
  constructor(private readonly albumRepository: AlbumRepository) {}

  async getTodayAlbum(): Promise<Album> {
    try {
      const lastAlbumResponse = await this.albumRepository.findLast();
      const findAlbumById = await this.albumRepository.findAlbumById(
        lastAlbumResponse.albumlist_id,
      );

      if (!findAlbumById) {
        throw new InternalServerErrorException(
          'ALBUM_SERVICE_ERROR_1, Album not found',
        );
      }

      const album = {
        id: findAlbumById.id,
        title: findAlbumById.title,
        artist: findAlbumById.artist,
        albumCover: findAlbumById.album_cover,
        released: findAlbumById.released.toString(),
        genre: findAlbumById.genre,
        subgenre: findAlbumById.subgenre,
        label: findAlbumById.label,
        description: findAlbumById.description,
        wikipediaUrl: findAlbumById.wikipedia_url,
      };

      return album;
    } catch (error) {
      throw new InternalServerErrorException(
        'ALBUM_SERVICE_ERROR_2',
        error.message,
      );
    }
  }

  async getRandomAlbum(): Promise<Album> {
    try {
      const allAlbunsIds = Array.from(
        { length: 1001 },
        (_, index) => index + 1,
      );

      const randomAlbum = getRandomItem(allAlbunsIds);

      const findAlbumById =
        await this.albumRepository.findAlbumById(randomAlbum);

      if (!findAlbumById) {
        throw new InternalServerErrorException(
          'ALBUM_SERVICE_ERROR_1, Album not found',
        );
      }

      const album = {
        id: findAlbumById.id,
        title: findAlbumById.title,
        artist: findAlbumById.artist,
        albumCover: findAlbumById.album_cover,
        released: findAlbumById.released.toString(),
        genre: findAlbumById.genre,
        subgenre: findAlbumById.subgenre,
        label: findAlbumById.label,
        description: findAlbumById.description,
        wikipediaUrl: findAlbumById.wikipedia_url,
      };

      return album;
    } catch (error) {
      throw new InternalServerErrorException(
        'ALBUM_SERVICE_ERROR_2',
        error.message,
      );
    }
  }

  async updateTodayAlbum(): Promise<void> {
    try {
      const allAlbunsIds = Array.from(
        { length: 1001 },
        (_, index) => index + 1,
      );

      const seenAlbums = await this.albumRepository.findAllSeenAlbums();
      const seenAlbumsIds = seenAlbums.map((album) => album.albumlist_id);

      const unseenAlbums = allAlbunsIds.filter(
        (albumId) => !seenAlbumsIds.includes(albumId),
      );

      const newAlbum = getRandomItem(unseenAlbums);

      await this.albumRepository.insertNewAlbum(newAlbum);
    } catch (error) {
      throw new InternalServerErrorException(
        'ALBUM_SERVICE_ERROR_3',
        error.message,
      );
    }
  }

  async clearSeenAlbums(): Promise<void> {
    try {
      await this.albumRepository.clearSeenAlbums();
    } catch (error) {
      throw new InternalServerErrorException(
        'ALBUM_SERVICE_ERROR_4',
        error.message,
      );
    }
  }

  async rateAlbum(body: { albumId: number; rating: number }) {
    try {
      const { albumId, rating } = body;

      await this.albumRepository.insertRating(albumId, rating);
    } catch (error) {
      throw new InternalServerErrorException(
        'ALBUM_SERVICE_ERROR_5',
        error.message,
      );
    }
  }

  async getRating(albumId: number) {
    try {
      const rating = await this.albumRepository.getRating(albumId);
      return rating;
    } catch (error) {
      throw new InternalServerErrorException(
        'ALBUM_SERVICE_ERROR_6',
        error.message,
      );
    }
  }
}

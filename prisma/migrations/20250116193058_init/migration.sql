-- CreateTable
CREATE TABLE "AlbumList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "album_cover" TEXT NOT NULL,
    "released" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "subgenre" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "wikipedia_url" TEXT NOT NULL,

    CONSTRAINT "AlbumList_pkey" PRIMARY KEY ("id")
);

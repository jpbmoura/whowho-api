-- CreateTable
CREATE TABLE "AlbumSeenList" (
    "id" SERIAL NOT NULL,
    "albumlist_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AlbumSeenList_pkey" PRIMARY KEY ("id")
);

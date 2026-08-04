-- CreateTable
CREATE TABLE "Hospital" (
    "id" SERIAL NOT NULL,
    "hospital_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

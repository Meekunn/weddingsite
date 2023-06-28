-- CreateEnum
CREATE TYPE "GOODIES_STRATEGY_ENUM" AS ENUM ('RANDOM', 'EQUAL');

-- CreateEnum
CREATE TYPE "GOODIES_STATUS_ENUM" AS ENUM ('ACTIVE', 'PENDING', 'EXPIRED');

-- CreateEnum
CREATE TYPE "ALLOCATION_STATUS_ENUM" AS ENUM ('CLAIMED', 'UNCLAIMED');

-- CreateTable
CREATE TABLE "Goodies" (
    "id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "strategy" "GOODIES_STRATEGY_ENUM" NOT NULL,
    "status" "GOODIES_STATUS_ENUM" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Goodies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allocation" (
    "id" TEXT NOT NULL,
    "goodieId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "status" "ALLOCATION_STATUS_ENUM" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Allocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllocationUser" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "allocationId" TEXT NOT NULL,
    "fw_res" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AllocationUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AllocationUser_allocationId_key" ON "AllocationUser"("allocationId");

-- AddForeignKey
ALTER TABLE "Allocation" ADD CONSTRAINT "Allocation_goodieId_fkey" FOREIGN KEY ("goodieId") REFERENCES "Goodies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllocationUser" ADD CONSTRAINT "AllocationUser_allocationId_fkey" FOREIGN KEY ("allocationId") REFERENCES "Allocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

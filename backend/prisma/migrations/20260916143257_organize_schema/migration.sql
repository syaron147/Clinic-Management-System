/*
  Warnings:

  - The values [LOGIN,PHONE_VERIFICATION] on the enum `OTPType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `description` on the `audit_logs` table. All the data in the column will be lost.
  - You are about to drop the column `attempts` on the `otps` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `otps` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `otps` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `otps` table. All the data in the column will be lost.
  - You are about to drop the column `isRevoked` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `refresh_tokens` table. All the data in the column will be lost.
  - You are about to drop the column `lastActiveAt` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `sessionId` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `sessions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[headDoctorId]` on the table `departments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `refresh_tokens` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `sessions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `resource` to the `audit_logs` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `action` on the `audit_logs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `email` to the `otps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otp` to the `otps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OTPType_new" AS ENUM ('EMAIL_VERIFICATION', 'PASSWORD_RESET');
ALTER TABLE "otps" ALTER COLUMN "type" TYPE "OTPType_new" USING ("type"::text::"OTPType_new");
ALTER TYPE "OTPType" RENAME TO "OTPType_old";
ALTER TYPE "OTPType_new" RENAME TO "OTPType";
DROP TYPE "public"."OTPType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "otps" DROP CONSTRAINT "otps_userId_fkey";

-- DropIndex
DROP INDEX "appointments_date_idx";

-- DropIndex
DROP INDEX "appointments_doctorId_idx";

-- DropIndex
DROP INDEX "appointments_patientId_idx";

-- DropIndex
DROP INDEX "appointments_status_idx";

-- DropIndex
DROP INDEX "audit_logs_action_idx";

-- DropIndex
DROP INDEX "audit_logs_createdAt_idx";

-- DropIndex
DROP INDEX "audit_logs_userId_idx";

-- DropIndex
DROP INDEX "medical_records_appointmentId_key";

-- DropIndex
DROP INDEX "otps_expiresAt_idx";

-- DropIndex
DROP INDEX "otps_userId_idx";

-- DropIndex
DROP INDEX "refresh_tokens_expiresAt_idx";

-- DropIndex
DROP INDEX "refresh_tokens_userId_idx";

-- DropIndex
DROP INDEX "sessions_expiresAt_idx";

-- DropIndex
DROP INDEX "sessions_sessionId_key";

-- DropIndex
DROP INDEX "sessions_userId_idx";

-- DropIndex
DROP INDEX "users_phone_key";

-- AlterTable
ALTER TABLE "appointments" ALTER COLUMN "symptoms" DROP NOT NULL;

-- AlterTable
ALTER TABLE "audit_logs" DROP COLUMN "description",
ADD COLUMN     "details" JSONB,
ADD COLUMN     "resource" TEXT NOT NULL,
DROP COLUMN "action",
ADD COLUMN     "action" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "doctors" ADD COLUMN     "certificates" JSONB,
ALTER COLUMN "qualifications" DROP NOT NULL;

-- AlterTable
ALTER TABLE "medical_records" ALTER COLUMN "symptoms" DROP NOT NULL;

-- AlterTable
ALTER TABLE "otps" DROP COLUMN "attempts",
DROP COLUMN "code",
DROP COLUMN "updatedAt",
DROP COLUMN "verified",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "isUsed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "otp" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "patients" ALTER COLUMN "allergies" DROP NOT NULL;

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "appointmentId" TEXT,
ADD COLUMN     "processedBy" TEXT,
ALTER COLUMN "billId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "refresh_tokens" DROP COLUMN "isRevoked",
DROP COLUMN "updatedAt",
ADD COLUMN     "ipAddress" TEXT,
ADD COLUMN     "revoked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "revokedAt" TIMESTAMP(3),
ADD COLUMN     "userAgent" TEXT;

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "lastActiveAt",
DROP COLUMN "sessionId",
DROP COLUMN "status",
DROP COLUMN "updatedAt",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "lastActivity" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "token" TEXT NOT NULL;

-- DropEnum
DROP TYPE "AuditAction";

-- DropEnum
DROP TYPE "SessionStatus";

-- CreateTable
CREATE TABLE "chat_messages" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'text',
    "read" BOOLEAN NOT NULL DEFAULT false,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "link" TEXT,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "departments_headDoctorId_key" ON "departments"("headDoctorId");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_token_key" ON "refresh_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");

-- AddForeignKey
ALTER TABLE "otps" ADD CONSTRAINT "otps_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_processedBy_fkey" FOREIGN KEY ("processedBy") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

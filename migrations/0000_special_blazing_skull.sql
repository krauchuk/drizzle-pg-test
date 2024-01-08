CREATE SCHEMA "app";

CREATE TABLE IF NOT EXISTS "app"."thread" (
	"id" serial NOT NULL,
	"name" text,
	"user" text,
	"data" json,
	"createdAt" timestamp,
	"updatedAt" timestamp
);

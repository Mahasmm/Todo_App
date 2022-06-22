import { log } from "console";
import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async ({ expressApp }: { expressApp: any }) => {
  const mongoConnection = await mongooseLoader();
  log(" DB loaded and connected!");

  await expressLoader({ app: expressApp });
  log("Express loaded");
};

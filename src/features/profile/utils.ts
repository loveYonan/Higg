import { DATABASE_ID, OWNER_ID, PROFILE_ID } from "@/config";
import { Databases, Query } from "node-appwrite";

interface GetMemberProps {
  databases: Databases;
  userId: string;
}

export const getProfile = async ({ databases, userId }: GetMemberProps) => {
  const profile = await databases.listDocuments(DATABASE_ID, PROFILE_ID, [
    Query.equal("userId", userId),
    Query.equal("owner_id", OWNER_ID),
  ]);

  return profile.documents[0];
};

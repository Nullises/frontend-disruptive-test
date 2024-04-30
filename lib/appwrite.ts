import { Client, Account, Storage } from "appwrite";

export const client = new Client();
const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";

export const downloadFiles = (fileID: string) => {
  const result = storage.getFileDownload(
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    fileID
  );
  console.log(result);
};

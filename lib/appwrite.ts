import { Client, Account, Storage, Avatars, ID } from "appwrite";
import { ErrorComponent as Error } from "@/app/components/common/error";

const client = new Client();
const account = new Account(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Replace with your project ID

export const createUser = async (
  email: string,
  password: string,
  username: string | undefined
) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    const created = {
      ...newAccount,
      avatarUrl: avatarUrl,
    };

    return created;
  } catch (error) {
    console.log(error);
    Error({
      title: error,
      statusCode: 404,
    });
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await account.createEmailSession(email, password);
    const user = await account.get();
    const avatarUrl = avatars.getInitials(user.name);
    return { ...user, avatarUrl: avatarUrl.href };
  } catch (error) {
    Error({
      title: error,
      statusCode: 404,
    });
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    const avatarUrl = avatars.getInitials(currentAccount.name);
    if (!currentAccount) throw Error;
    return { ...currentAccount, avatarUrl: avatarUrl.href };
  } catch (error) {
    Error({
      title: error,
      statusCode: 404,
    });
  }
};

export const signOut = async () => {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    Error({
      title: error,
      statusCode: 404,
    });
  }
};

export const downloadFiles = (fileID: string) => {
  const result = storage.getFileDownload(
    process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    fileID
  );
  console.log(result);
};

export { ID, account };

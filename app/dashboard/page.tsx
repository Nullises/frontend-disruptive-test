"use client";
import React, { useEffect, useState } from "react";
import { account, downloadFiles, ID, signOut } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useRouter } from "next/navigation";
import Nav from "../components/common/nav";
import ContentService from "@/lib/services/contentService";
import { UserResponse } from "@/utils/interfaces/user";
import { ContentResponse } from "@/utils/interfaces/content";
import { ImageCard } from "../components/imageCard";

const Dashboard = () => {
  const router = useRouter();
  const { setIsLogged, setUser, user, isLogged } = useGlobalContext();
  const [contents, setContents] = useState<ContentResponse[]>([]);

  async function getContents() {
    const getContentsData = await ContentService.getAll();
    setContents(getContentsData);
    console.log("getContentsData", getContentsData);
  }

  useEffect(() => {
    getContents();
  }, []);

  if (!isLogged && !user) {
    router.push("/");
  }

  async function logout() {
    await signOut();
    setIsLogged(false);
    setUser(null);
    router.push("/");
  }

  return (
    <div>
      <Nav
        username={user?.name}
        onSignOut={logout}
        avatarUrl={user?.avatarUrl}
      />
      <section className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 ">
        {contents.length > 0 && (
          <>
            {contents.map((item: any, index: number) => (
              <>
                <ImageCard key={index} item={item} />
              </>
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

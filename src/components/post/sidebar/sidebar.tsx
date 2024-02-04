'use client';

import SimpleLoader from "~/components/custom/loading/simple-loading";
import { api } from "~/utils/api";
import Publish from "./publish";
import ConnectedAccount from "./connections";
import { SocialType } from "~/types/post-enums";

const SideBar = () => {
  const { data, isLoading } = api.user.fetchConnectedAccounts.useQuery();

  return (
    <div className="z-20 w-full rounded-lg bg-card dark:border  p-4 px-8 shadow-xl  shadow-blue-gray-900/5 lg:fixed lg:right-4   lg:h-[100vh] lg:max-w-[20rem]">
        <div className="my-4 flex flex-grow flex-col justify-end gap-1">
          <h2 className="text-xl">Schedule Post</h2>
          <Publish />
          <span className="my-2 text-xl">Publish Post</span>
          {isLoading ? (<SimpleLoader />) : (
          <div className="grid grid-cols-3 place-items-start gap-3">
            {data?.map((item) =>
              item.type === SocialType.Github ? null : (
                <ConnectedAccount
                  key={item.data.tokenId}
                  name={item.data.name || ""}
                  type={item.type}
                  profilePic={item.data.profile_image_url || "/user.png"}
                  id={item.data.tokenId}
                />
              )
            )}
          </div> )}
        </div>
    </div>
  );
};

export default SideBar;

import { TabButton } from "@/components/Shared/UI";
import {
  ChatBubbleLeftIcon,
  FilmIcon,
  PencilSquareIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/outline";
import { AccountFeedType } from "@hey/data/enums";
import type { JSX } from "react";
import MediaFilter from "./Filters/MediaFilter";

interface FeedTypeProps {
  feedType: AccountFeedType;
}

const FeedType = ({ feedType }: FeedTypeProps) => {
  const tabs = [
    {
      icon: <PencilSquareIcon className="size-4" />,
      name: "Feed",
      type: AccountFeedType.Feed
    },
    {
      icon: <ChatBubbleLeftIcon className="size-4" />,
      name: "Replies",
      type: AccountFeedType.Replies
    },
    {
      icon: <FilmIcon className="size-4" />,
      name: "Media",
      type: AccountFeedType.Media
    },
    {
      icon: <ShoppingBagIcon className="size-4" />,
      name: "Collected",
      type: AccountFeedType.Collects
    }
  ].filter(
    (tab): tab is { icon: JSX.Element; name: string; type: AccountFeedType } =>
      Boolean(tab)
  );

  return (
    <div className="flex items-center justify-between">
      <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-2 sm:mt-0 sm:px-0 md:pb-0">
        {tabs.map((tab) => (
          <TabButton
            active={feedType === tab.type}
            icon={tab.icon}
            key={tab.type}
            name={tab.name}
            type={tab.type.toLowerCase()}
          />
        ))}
      </div>
      {feedType === AccountFeedType.Media && <MediaFilter />}
    </div>
  );
};

export default FeedType;

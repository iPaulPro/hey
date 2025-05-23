import { Image } from "@/components/Shared/UI";
import formatRelativeOrAbsolute from "@hey/helpers/datetime/formatRelativeOrAbsolute";
import getAccount from "@hey/helpers/getAccount";
import getAvatar from "@hey/helpers/getAvatar";
import type { AccountFragment, PostGroupInfoFragment } from "@hey/indexer";
import type { ReactNode } from "react";
import { memo } from "react";
import { Link, useLocation } from "react-router";
import AccountPreview from "../Shared/AccountPreview";
import Slug from "../Shared/Slug";

interface PostAccountProps {
  account: AccountFragment;
  group?: PostGroupInfoFragment;
  postSlug: string;
  timestamp: Date;
}

const PostAccount = ({
  account,
  group,
  postSlug,
  timestamp
}: PostAccountProps) => {
  const { pathname } = useLocation();

  const CustomLink = ({ children }: { children: ReactNode }) => (
    <Link
      className="outline-hidden hover:underline focus:underline"
      to={getAccount(account).link}
    >
      <AccountPreview
        username={account.username?.localName}
        address={account.address}
        showUserPreview
      >
        {children}
      </AccountPreview>
    </Link>
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-x-1">
        <CustomLink>
          <span className="font-semibold">{getAccount(account).name}</span>
        </CustomLink>
        <CustomLink>
          <Slug
            className="text-sm"
            slug={getAccount(account).usernameWithPrefix}
          />
        </CustomLink>
        {timestamp ? (
          <span className="text-neutral-500 dark:text-neutral-200">
            <span className="mr-1">·</span>
            <Link className="text-xs hover:underline" to={`/posts/${postSlug}`}>
              {formatRelativeOrAbsolute(timestamp)}
            </Link>
          </span>
        ) : null}
      </div>
      {group?.metadata && pathname !== "/g/[address]" ? (
        <Link
          className="mt-0.5 mb-2 flex w-fit max-w-sm items-center gap-x-1 text-xs hover:underline focus:underline"
          to={`/g/${group.address}`}
        >
          <Image
            src={getAvatar(group)}
            alt={group.metadata.name}
            className="size-4 rounded"
          />
          <span className="truncate text-neutral-500 dark:text-neutral-200">
            {group.metadata.name}
          </span>
        </Link>
      ) : null}
    </div>
  );
};

export default memo(PostAccount);

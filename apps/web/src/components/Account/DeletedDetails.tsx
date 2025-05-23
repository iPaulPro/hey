import Slug from "@/components/Shared/Slug";
import { H3, Image } from "@/components/Shared/UI";
import { STATIC_IMAGES_URL } from "@hey/data/constants";
import getAccount from "@hey/helpers/getAccount";
import type { AccountFragment } from "@hey/indexer";

interface DeletedDetailsProps {
  account: AccountFragment;
}

const DeletedDetails = ({ account }: DeletedDetailsProps) => {
  const { name, usernameWithPrefix } = getAccount(account);

  return (
    <div className="space-y-5 px-5 sm:px-0">
      <div className="-mt-24 sm:-mt-32 relative size-32 sm:size-52">
        <Image
          alt={account.address}
          className="size-32 rounded-xl bg-neutral-200 ring-8 ring-neutral-50 sm:size-52 dark:bg-neutral-700 dark:ring-black"
          height={128}
          src={`${STATIC_IMAGES_URL}/suspended.png`}
          width={128}
        />
      </div>
      <div className="space-y-1 py-2">
        <H3 className="truncate">{name}</H3>
        <div>
          <Slug className="text-sm sm:text-base" slug={usernameWithPrefix} />
        </div>
      </div>
    </div>
  );
};

export default DeletedDetails;

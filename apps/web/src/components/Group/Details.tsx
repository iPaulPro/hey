import JoinLeaveButton from "@/components/Shared/Group/JoinLeaveButton";
import Markup from "@/components/Shared/Markup";
import { Button, H3, Image, LightBox } from "@/components/Shared/UI";
import { useAccountStore } from "@/store/persisted/useAccountStore";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import getAvatar from "@hey/helpers/getAvatar";
import getMentions from "@hey/helpers/getMentions";
import type { GroupFragment } from "@hey/indexer";
import { useState } from "react";
import { useNavigate } from "react-router";
import MembersCount from "./MembersCount";

interface DetailsProps {
  group: GroupFragment;
}

const Details = ({ group }: DetailsProps) => {
  const navigate = useNavigate();
  const { currentAccount } = useAccountStore();
  const [expandedImage, setExpandedImage] = useState<null | string>(null);

  return (
    <div className="mb-4 space-y-5 px-5 sm:px-0">
      <div className="-mt-24 sm:-mt-32 relative size-32 sm:size-52">
        <Image
          alt={group.address}
          className="size-32 cursor-pointer rounded-xl bg-neutral-200 ring-8 ring-neutral-50 sm:size-52 dark:bg-neutral-700 dark:ring-black"
          height={128}
          onClick={() => setExpandedImage(getAvatar(group))}
          src={getAvatar(group)}
          width={128}
        />
        <LightBox onClose={() => setExpandedImage(null)} url={expandedImage} />
      </div>
      <H3 className="truncate py-2">{group.metadata?.name}</H3>
      {group.metadata?.description ? (
        <div className="markup linkify mr-0 break-words text-md sm:mr-10">
          <Markup mentions={getMentions(group.metadata?.description)}>
            {group.metadata?.description}
          </Markup>
        </div>
      ) : null}
      <div className="space-y-5">
        <MembersCount group={group} />
        <div>
          {currentAccount?.address === group.owner ? (
            <>
              <Button
                icon={<Cog6ToothIcon className="size-5" />}
                onClick={() => navigate(`/g/${group.address}/settings`)}
                outline
              >
                Edit Group
              </Button>
            </>
          ) : (
            <JoinLeaveButton group={group} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;

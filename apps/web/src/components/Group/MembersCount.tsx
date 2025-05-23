import Members from "@/components/Shared/Modal/Members";
import GraphStatsShimmer from "@/components/Shared/Shimmer/GraphStatsShimmer";
import { H4, Modal } from "@/components/Shared/UI";
import humanize from "@hey/helpers/humanize";
import { type GroupFragment, useGroupStatsQuery } from "@hey/indexer";
import { useState } from "react";

interface MembersCountProps {
  group: GroupFragment;
}

const MembersCount = ({ group }: MembersCountProps) => {
  const [showMembersModal, setShowMembersModal] = useState(false);

  const { data, loading } = useGroupStatsQuery({
    variables: { request: { group: group.address } }
  });

  if (loading) {
    return <GraphStatsShimmer count={1} />;
  }

  if (!data) {
    return null;
  }

  const stats = data.groupStats;

  return (
    <div className="flex gap-8">
      <button
        className="text-left outline-offset-4"
        onClick={() => setShowMembersModal(true)}
        type="button"
      >
        <H4>{humanize(stats?.totalMembers)}</H4>
        <div className="text-neutral-500 dark:text-neutral-200">Members</div>
      </button>
      <Modal
        onClose={() => setShowMembersModal(false)}
        show={showMembersModal}
        title="Members"
        size="md"
      >
        <Members group={group} />
      </Modal>
    </div>
  );
};

export default MembersCount;

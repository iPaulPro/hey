import AccountListShimmer from "@/components/Shared/Shimmer/AccountListShimmer";
import SingleAccount from "@/components/Shared/SingleAccount";
import { EmptyState, ErrorMessage } from "@/components/Shared/UI";
import { useAccountStore } from "@/store/persisted/useAccountStore";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  type WhoExecutedActionOnPostRequest,
  useWhoExecutedActionOnPostQuery
} from "@hey/indexer";
import { Virtuoso } from "react-virtuoso";

interface CollectorsProps {
  postId: string;
}

const Collectors = ({ postId }: CollectorsProps) => {
  const { currentAccount } = useAccountStore();

  const request: WhoExecutedActionOnPostRequest = {
    post: postId,
    filter: { anyOf: [{ simpleCollect: true }] }
  };

  const { data, error, fetchMore, loading } = useWhoExecutedActionOnPostQuery({
    skip: !postId,
    variables: { request }
  });

  const accounts = data?.whoExecutedActionOnPost?.items;
  const pageInfo = data?.whoExecutedActionOnPost?.pageInfo;
  const hasMore = pageInfo?.next;

  const onEndReached = async () => {
    if (hasMore) {
      await fetchMore({
        variables: { request: { ...request, cursor: pageInfo?.next } }
      });
    }
  };

  if (loading) {
    return <AccountListShimmer />;
  }

  if (!accounts?.length) {
    return (
      <div className="p-5">
        <EmptyState
          icon={<ShoppingBagIcon className="size-8" />}
          message="No collectors."
          hideCard
        />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorMessage
        className="m-5"
        error={error}
        title="Failed to load collectors"
      />
    );
  }

  return (
    <Virtuoso
      className="virtual-account-list"
      data={accounts}
      endReached={onEndReached}
      itemContent={(_, action) => (
        <div className="p-5">
          <SingleAccount
            hideFollowButton={
              currentAccount?.address === action.account.address
            }
            hideUnfollowButton={
              currentAccount?.address === action.account.address
            }
            account={action.account}
            showBio
            showUserPreview={false}
          />
        </div>
      )}
    />
  );
};

export default Collectors;

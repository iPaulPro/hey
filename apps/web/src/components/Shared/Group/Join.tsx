import { Button } from "@/components/Shared/UI";
import trackEvent from "@/helpers/analytics";
import errorToast from "@/helpers/errorToast";
import useTransactionLifecycle from "@/hooks/useTransactionLifecycle";
import { useAccountStatus } from "@/store/non-persisted/useAccountStatus";
import { useApolloClient } from "@apollo/client";
import { Errors } from "@hey/data/errors";
import { Events } from "@hey/data/events";
import { type GroupFragment, useJoinGroupMutation } from "@hey/indexer";
import { useState } from "react";
import toast from "react-hot-toast";

interface JoinProps {
  group: GroupFragment;
  setJoined: (joined: boolean) => void;
  small: boolean;
  className?: string;
  title?: string;
}

const Join = ({
  group,
  setJoined,
  small,
  className = "",
  title = "Join"
}: JoinProps) => {
  const { isSuspended } = useAccountStatus();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cache } = useApolloClient();
  const handleTransactionLifecycle = useTransactionLifecycle();
  const updateCache = () => {
    cache.modify({
      fields: { operations: () => true },
      id: cache.identify(group)
    });
  };

  const onCompleted = () => {
    updateCache();
    setIsSubmitting(false);
    setJoined(true);
    trackEvent(Events.Group.Join);
    toast.success("Joined group");
  };

  const onError = (error: any) => {
    setIsSubmitting(false);
    errorToast(error);
  };

  const [joinGroup] = useJoinGroupMutation({
    onCompleted: async ({ joinGroup }) => {
      if (joinGroup.__typename === "JoinGroupResponse") {
        return onCompleted();
      }

      if (joinGroup.__typename === "GroupOperationValidationFailed") {
        return onError({ message: joinGroup.reason });
      }

      return await handleTransactionLifecycle({
        transactionData: joinGroup,
        onCompleted,
        onError
      });
    },
    onError
  });

  const handleJoin = async () => {
    if (isSuspended) {
      return toast.error(Errors.Suspended);
    }

    setIsSubmitting(true);

    return await joinGroup({
      variables: { request: { group: group.address } }
    });
  };

  return (
    <Button
      aria-label="Join"
      className={className}
      disabled={isSubmitting}
      onClick={handleJoin}
      outline
      size={small ? "sm" : "md"}
    >
      {title}
    </Button>
  );
};

export default Join;

import Slug from "@/components/Shared/Slug";
import { Button, Card, CardHeader } from "@/components/Shared/UI";
import errorToast from "@/helpers/errorToast";
import useTransactionLifecycle from "@/hooks/useTransactionLifecycle";
import { useAccountStatus } from "@/store/non-persisted/useAccountStatus";
import { useAccountStore } from "@/store/persisted/useAccountStore";
import { Errors } from "@hey/data/errors";
import getAccount from "@hey/helpers/getAccount";
import { useUnassignUsernameFromAccountMutation } from "@hey/indexer";
import { useState } from "react";
import toast from "react-hot-toast";

const UnlinkUsername = () => {
  const { currentAccount } = useAccountStore();
  const { isSuspended } = useAccountStatus();
  const [unlinking, setUnlinking] = useState<boolean>(false);
  const handleTransactionLifecycle = useTransactionLifecycle();

  const onCompleted = () => {
    setUnlinking(false);
    toast.success("Unlinked");
  };

  const onError = (error: Error) => {
    setUnlinking(false);
    errorToast(error);
  };

  const [unassignUsernameFromAccount] = useUnassignUsernameFromAccountMutation({
    onCompleted: async ({ unassignUsernameFromAccount }) => {
      if (
        unassignUsernameFromAccount.__typename === "UnassignUsernameResponse"
      ) {
        return onCompleted();
      }

      return await handleTransactionLifecycle({
        transactionData: unassignUsernameFromAccount,
        onCompleted,
        onError
      });
    },
    onError
  });

  const handleUnlink = async () => {
    if (!currentAccount) {
      return;
    }

    if (isSuspended) {
      return toast.error(Errors.Suspended);
    }

    setUnlinking(true);

    return await unassignUsernameFromAccount({
      variables: { request: { namespace: currentAccount.username?.namespace } }
    });
  };

  return (
    <Card>
      <CardHeader
        body="Unlinking your current username will remove it from your account, preventing others from easily identifying and connecting with you based on your unique online identity."
        title={
          <span>
            Unlink <Slug slug={getAccount(currentAccount).usernameWithPrefix} />{" "}
            from your account
          </span>
        }
      />
      <div className="m-5">
        <Button disabled={unlinking} onClick={handleUnlink} outline>
          Un-link now
        </Button>
      </div>
    </Card>
  );
};

export default UnlinkUsername;

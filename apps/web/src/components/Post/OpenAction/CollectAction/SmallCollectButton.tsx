import type { PostFragment } from "@hey/indexer";
import { Button, Modal } from "@hey/ui";
import { useState } from "react";
import CollectActionBody from "./CollectActionBody";

interface SmallCollectButtonProps {
  post: PostFragment;
}

const SmallCollectButton = ({ post }: SmallCollectButtonProps) => {
  const [showCollectModal, setShowCollectModal] = useState(false);
  const hasSimpleCollected = post.operations?.hasSimpleCollected;

  return (
    <>
      <Button
        onClick={() => setShowCollectModal(true)}
        outline={!hasSimpleCollected}
        size="sm"
      >
        {hasSimpleCollected ? "Collected" : "Collect"}
      </Button>
      <Modal
        onClose={() => setShowCollectModal(false)}
        show={showCollectModal}
        title="Collect"
      >
        <CollectActionBody
          post={post}
          setShowCollectModal={setShowCollectModal}
        />
      </Modal>
    </>
  );
};

export default SmallCollectButton;

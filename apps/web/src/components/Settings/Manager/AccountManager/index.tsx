import { Button, Card, Modal, TabButton } from "@/components/Shared/UI";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import AddAccountManager from "./AddAccountManager";
import Managed from "./Management/Managed";
import Unmanaged from "./Management/Unmanaged";
import Managers from "./Managers";

enum Type {
  MANAGED = "MANAGED",
  MANAGERS = "MANAGERS",
  UNMANAGED = "UNMANAGED"
}

const AccountManager = () => {
  const [type, setType] = useState<Type>(Type.MANAGERS);
  const [showAddManagerModal, setShowAddManagerModal] = useState(false);

  return (
    <Card className="linkify space-y-2">
      <div className="mx-5 mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TabButton
            active={type === Type.MANAGERS}
            name="Managers"
            onClick={() => setType(Type.MANAGERS)}
            showOnSm
          />
          <TabButton
            active={type === Type.MANAGED}
            name="Managed"
            onClick={() => setType(Type.MANAGED)}
            showOnSm
          />
          <TabButton
            active={type === Type.UNMANAGED}
            name="Un-managed"
            onClick={() => setType(Type.UNMANAGED)}
            showOnSm
          />
        </div>
        {type === Type.MANAGERS && (
          <>
            <Button
              icon={<PlusCircleIcon className="size-4" />}
              onClick={() => setShowAddManagerModal(true)}
            >
              Add manager
            </Button>
            <Modal
              onClose={() => setShowAddManagerModal(false)}
              show={showAddManagerModal}
              title="Add Account Manager"
            >
              <AddAccountManager
                setShowAddManagerModal={setShowAddManagerModal}
              />
            </Modal>
          </>
        )}
      </div>
      {type === Type.MANAGERS && <Managers />}
      {type === Type.MANAGED && <Managed />}
      {type === Type.UNMANAGED && <Unmanaged />}
    </Card>
  );
};

export default AccountManager;

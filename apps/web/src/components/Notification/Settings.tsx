import IncludeLowScore from "@/components/Settings/Preferences/IncludeLowScore";
import { Modal, Tooltip } from "@/components/Shared/UI";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Settings = () => {
  const [showNotificationSettings, setShowNotificationSettings] =
    useState(false);

  const handleOpenSettings = () => setShowNotificationSettings(true);
  const handleCloseSettings = () => setShowNotificationSettings(false);

  return (
    <>
      <button
        className="mx-3 rounded-md p-1 hover:bg-neutral-300/20 sm:mx-0"
        onClick={handleOpenSettings}
        type="button"
      >
        <Tooltip content="Notification settings" placement="top">
          <Cog6ToothIcon className="size-5 text-neutral-500 dark:text-neutral-200" />
        </Tooltip>
      </button>
      <Modal
        onClose={handleCloseSettings}
        show={showNotificationSettings}
        title="Notification settings"
      >
        <div className="p-5">
          <IncludeLowScore />
        </div>
      </Modal>
    </>
  );
};

export default Settings;

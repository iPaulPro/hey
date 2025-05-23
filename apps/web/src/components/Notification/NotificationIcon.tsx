import { Tooltip } from "@/components/Shared/UI";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

const NotificationIcon = () => {
  return (
    <Tooltip content="Notifications" placement="bottom">
      <Link
        className="hidden rounded-md px-2 py-1 hover:bg-neutral-300/20 md:flex"
        to="/notifications"
      >
        <BellIcon className="size-5 sm:size-6" />
      </Link>
    </Tooltip>
  );
};

export default NotificationIcon;

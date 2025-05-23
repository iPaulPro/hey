import stopEventPropagation from "@hey/helpers/stopEventPropagation";
import type { AnyPostFragment } from "@hey/indexer";
import { useLocation, useParams } from "react-router";
import Commented from "./Commented";
import Reposted from "./Reposted";

interface PostTypeProps {
  post: AnyPostFragment;
  showThread?: boolean;
  showType: boolean;
}

const PostType = ({ post, showThread = false, showType }: PostTypeProps) => {
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug: string }>();
  const type = post.__typename;

  if (!showType) {
    return null;
  }

  return (
    <span onClick={stopEventPropagation}>
      {type === "Repost" ? <Reposted account={post.author} /> : null}
      {type === "Post" &&
      post.commentOn &&
      (showThread || pathname === `/posts/${slug}`) ? (
        <Commented commentOn={post.commentOn} />
      ) : null}
    </span>
  );
};

export default PostType;

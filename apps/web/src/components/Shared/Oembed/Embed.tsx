import type { OembedRouterOutput } from "@hey/api/src/routers/oembed";
import { ATTACHMENT } from "@hey/data/constants";
import imageKit from "@hey/helpers/imageKit";
import stopEventPropagation from "@hey/helpers/stopEventPropagation";
import { Card, Image } from "@hey/ui";
import Link from "next/link";

interface EmbedProps {
  og: OembedRouterOutput["get"];
}

const Embed = ({ og }: EmbedProps) => {
  if (!og) {
    return null;
  }

  return (
    <div className="mt-4 w-full text-sm md:w-4/6">
      <Link
        href={og.url}
        onClick={stopEventPropagation}
        rel="noreferrer noopener"
        target={og.url.includes(location.host) ? "_self" : "_blank"}
      >
        <Card className="p-3" forceRounded>
          <div className="flex items-center">
            {og.image ? (
              <Image
                alt="Thumbnail"
                className="size-16 rounded-xl bg-gray-200 md:size-20"
                height={80}
                onError={({ currentTarget }) => {
                  currentTarget.src = og.image as string;
                }}
                src={imageKit(og.image, ATTACHMENT)}
                width={80}
              />
            ) : null}
            <div className="truncate px-5 py-4">
              <div className="space-y-1">
                {og.title ? (
                  <div className="flex items-center space-x-1.5">
                    {og.favicon ? (
                      <img
                        alt="Favicon"
                        className="size-4 rounded-full"
                        height={16}
                        src={og.favicon}
                        title={og.site || og.url}
                        width={16}
                      />
                    ) : null}
                    <b className="truncate">{og.title}</b>
                  </div>
                ) : null}
                {og.description ? (
                  <div className="ld-text-gray-500 line-clamp-1 whitespace-break-spaces">
                    {og.description.replace(/ +/g, " ")}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default Embed;

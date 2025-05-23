import PostsShimmer from "@/components/Shared/Shimmer/PostsShimmer";
import {
  GridItemEight,
  GridItemFour,
  GridLayout
} from "@/components/Shared/UI";

const GroupPageShimmer = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1350px]">
        <div className="shimmer h-52 sm:h-[350px] md:rounded-b-2xl" />
      </div>
      <GridLayout>
        <GridItemFour>
          <div className="mb-4 space-y-9 px-5 sm:px-0">
            <div className="-mt-24 sm:-mt-32 relative size-32 bg-neutral-100 sm:size-52">
              <div className="shimmer size-32 rounded-xl ring-8 ring-neutral-50 sm:size-52 dark:bg-neutral-700 dark:ring-black" />
            </div>
            <div className="space-y-3">
              <div className="shimmer h-5 w-1/3 rounded-lg" />
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="shimmer h-3 w-7/12 rounded-lg" />
                <div className="shimmer h-3 w-1/3 rounded-lg" />
              </div>
              <div className="space-y-2 pb-1">
                <div className="shimmer size-7 rounded-lg" />
                <div className="shimmer h-3 w-20 rounded-lg" />
              </div>
              <div className="shimmer h-[34px] w-20 rounded-full" />
            </div>
          </div>
        </GridItemFour>
        <GridItemEight>
          <PostsShimmer />
        </GridItemEight>
      </GridLayout>
    </>
  );
};

export default GroupPageShimmer;

import SkeletonResources from "@/components/Skeleton/skeletonResources";

export default function Page() {
  return (
    <>
      <section>
        <SkeletonResources />
        {/* <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-muted/50" />
            ))}
          </div>
        </div> */}
      </section>
    </>
  );
}

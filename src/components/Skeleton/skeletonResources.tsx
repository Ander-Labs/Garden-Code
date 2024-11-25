
import { Skeleton } from "@/components/ui/skeleton";


export default function SkeletonResources() {
    return (
      <>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <Skeleton key={i} className="aspect-square rounded-xl bg-muted/50" />
            ))}
          </div>
        </div>
      </>
    );
}
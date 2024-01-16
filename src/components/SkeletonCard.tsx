import { Skeleton } from "./ui/skeleton";
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";

function SkeletonCard() {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 items-center">
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="h-6 flex-grow" />
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default SkeletonCard;

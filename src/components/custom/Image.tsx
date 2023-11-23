import art from "/images/art.jpg";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type propsType = {
  className?: string;
  src?: string;
};

const Image = ({ className, src = art }: propsType) => {
  return (
    <Avatar className={cn("w-full h-full", className)}>
      <AvatarImage loading="lazy" src={src} alt={src} />
      <AvatarFallback>{src}</AvatarFallback>
    </Avatar>
  );
};

export default Image;

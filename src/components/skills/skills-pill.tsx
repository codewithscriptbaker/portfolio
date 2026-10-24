import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100 sm:px-4 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg">
      <Icon
        className="h-4 w-4 shrink-0 text-accent sm:h-6 sm:w-6 md:h-8 md:w-8"
        aria-hidden
      />
      <span className="font-medium">{name}</span>
    </div>
  );
}

import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon } = props;
  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-zinc-100 sm:text-base md:px-6 md:py-3 md:text-lg">
      <Icon className="h-5 w-5 shrink-0 text-accent sm:h-8 sm:w-8" aria-hidden />
      <span className="font-medium">{name}</span>
    </div>
  );
}

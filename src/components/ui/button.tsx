import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/utility/classNames";

type Variant = "primary" | "secondary" | "tertiary";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent/85 focus-visible:outline-accent",
  secondary:
    "border border-accent/50 bg-transparent text-accent hover:bg-accent/10 focus-visible:outline-accent",
  tertiary:
    "bg-transparent text-accent underline-offset-4 hover:underline focus-visible:outline-accent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base disabled:pointer-events-none disabled:opacity-50";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  variant?: Variant;
  children: ReactNode;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = classNames(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={(rest as ButtonAsButton).type ?? "button"}
      className={classes}
      {...(rest as ButtonAsButton)}
    >
      {children}
    </button>
  );
}

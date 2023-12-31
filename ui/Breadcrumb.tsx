import * as React from "react";
import Link from "next/link";
import { Icon } from "@ui/Icon/Icon";
import { colors } from "@ui/design-tokens";
import { getUserID } from "../lib/user";
import { useRouter } from "next/router";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div css={{ display: "flex", alignItems: "center" }}>
      {items.map((item, index) => (
        <>
          {item.href ? (
            <Link
              href={{
                pathname: item.href,
                query: { userId: getUserID(useRouter()) },
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span css={{ color: colors.secondary[700] }} key={index}>
              {item.label}
            </span>
          )}
          {index < items.length - 1 && <Icon icon="chevronRight" size={16} />}
        </>
      ))}
    </div>
  );
};

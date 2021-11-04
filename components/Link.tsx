import { ReactNode, FC } from "react";
import NextLink from "next/link";

const Link: FC<{
  href: string;
  children: ReactNode;
}> = ({ href, children }) => {
  return (
    <NextLink href={href || ""} passHref>
      <a style={{ textDecoration: "none" }}>{children}</a>
    </NextLink>
  );
};

export default Link;

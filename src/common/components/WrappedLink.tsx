import { ComponentProps, forwardRef } from "react";
import Link from "next/link";

type WrappedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href?: string };

/**
 * Next.js에서는 링크(<a>)들이 Next.js와 내부적으로 연동이 되도록 <Link> 컴포넌트를 제공합니다.
 * 이 컴포넌트는 해당 컴포넌트를 좀 더 편하게 사용하기 위해 만들었습니다.
 *
 * 아래와 같은 기능들을 제공합니다.
 * - className을 통해 스타일링이 가능합니다. (즉 SCSS, Emotion 등 호환)
 * - 내부 URL(ex. "/hello")의 경우 같은 탭에서, 외부 URL(ex. "https://www.naver.com")의 경우 새 탭에서 링크가 열립니다.
 * - ref가 적절하게 설정됩니다.
 */
const WrappedLink = forwardRef<HTMLAnchorElement, WrappedLinkProps>(({ href = "/", children, ...others }, ref) => (
  <Link
    ref={ref}
    href={href}
    // Open external links at the new tabs.
    {...(!isInternalLink(href) && { target: "_blank", rel: "noreferrer noopener" })}
    {...others}
  >
    {/* We separate `children` from `others` to avoid anchor-has-content lint error. */}
    {children}
  </Link>
));

WrappedLink.displayName = "WrappedLink";

function isInternalLink(href: string) {
  return href.startsWith("/");
}

export default WrappedLink;

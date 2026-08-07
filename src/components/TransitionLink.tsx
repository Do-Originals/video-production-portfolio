"use client";

import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface TransitionLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {
  children: React.ReactNode;
  href: string;
}

export default function TransitionLink({ children, href, onClick, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const targetHref = useRef<string | null>(null);

  useEffect(() => {
    const handleReadyToRoute = () => {
      if (isNavigating && targetHref.current) {
        router.push(targetHref.current);
        setIsNavigating(false);
      }
    };
    
    window.addEventListener("transition-ready-to-route", handleReadyToRoute);
    return () => window.removeEventListener("transition-ready-to-route", handleReadyToRoute);
  }, [isNavigating, router]);

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Call user defined onClick if exists
    if (onClick) {
      onClick(e);
    }

    // Don't intercept if it's prevented or if it's the same path, or opening in new tab
    if (e.defaultPrevented || pathname === href || props.target === "_blank") return;
    
    // Hash links on same page shouldn't trigger full transition, 
    // but the navbar already handles Services hash via custom click.
    // We just handle actual page routing.
    
    e.preventDefault();
    targetHref.current = href;
    setIsNavigating(true);
    
    // Trigger global transition animation
    window.dispatchEvent(new CustomEvent("start-page-transition"));
  };

  return (
    <Link href={href} onClick={handleTransition} {...props}>
      {children}
    </Link>
  );
}

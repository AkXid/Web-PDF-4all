"use client";
import { useState, useEffect } from "react";

interface ProtectedTextProps {
  parts: string[];
  className?: string;
}

export function ProtectedText({ parts, className }: ProtectedTextProps) {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(parts.join(""));
  }, []);
  return <span className={className} suppressHydrationWarning>{text}</span>;
}

interface ProtectedLinkProps {
  textParts: string[];
  hrefParts: string[];
  className?: string;
}

export function ProtectedLink({ textParts, hrefParts, className }: ProtectedLinkProps) {
  const [text, setText] = useState("");
  const [href, setHref] = useState("#");
  useEffect(() => {
    setText(textParts.join(""));
    setHref(hrefParts.join(""));
  }, []);
  return <a href={href} className={className} suppressHydrationWarning>{text}</a>;
}

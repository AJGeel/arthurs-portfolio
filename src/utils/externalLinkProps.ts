export const externalLinkProps = (isExternal?: boolean) => ({
  ...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {}),
});

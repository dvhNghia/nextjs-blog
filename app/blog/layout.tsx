import React from "react";

function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>This is Blog Layout</h1>
      <div>{children}</div>
    </>
  );
}

export default BlogLayout;

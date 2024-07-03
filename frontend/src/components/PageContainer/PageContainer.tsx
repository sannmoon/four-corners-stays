import React, { PropsWithChildren } from "react";
import "./pageContainer.scss";

function PageContainer({ children }: PropsWithChildren) {
  return <div className="pageContainer">{children}</div>;
}

export default PageContainer;

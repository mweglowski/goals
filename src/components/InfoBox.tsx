import { type ReactNode } from "react";

type InfoBoxProps = {
  children: ReactNode;
};

const InfoBox = ({ children }: InfoBoxProps) => {
  return (
    <aside className="p-4 m-2">
      <p className="text-lg text-center">{children}</p>
    </aside>
  );
};

export default InfoBox;

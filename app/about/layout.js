import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="flex my-4 border-b gap-4">
            <li><Link href={'/about/Inner'}>Inner1</Link></li>
            <li><Link href={'/about/inner2'}>Inner2</Link></li>
        </ul>
      </nav>
      <div className="min-h-[50vh]">{children}</div>
    </div>
  );
};

export default layout;

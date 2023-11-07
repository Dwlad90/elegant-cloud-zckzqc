"use client";

import s9 from "style9";

const c = s9.create({
  test: {
    color: "plum",
    backgroundColor: "royalblue",
  },
});

export default function ClntComponent() {
  return <span className={s9(c.test)}>Test client</span>;
}

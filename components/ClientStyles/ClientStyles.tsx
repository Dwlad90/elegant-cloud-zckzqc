"use client";
import React from "react";

import styles from "./styles.module.css";

import s9 from "style9";

const c = s9.create({
  foobar: {
    color: "turquoise",
    backgroundColor: "blue",
  },
});

export default function ClientStyles() {
  return (
    <div>
      <div className={styles.bar}>Client side Modules CSS</div>
      <div className={s9(c.foobar)}> Client side Style9 CSS</div>
    </div>
  );
}

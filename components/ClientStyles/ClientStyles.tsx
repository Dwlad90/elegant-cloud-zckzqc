"use client";
import React from "react";

import styles from "./styles.module.css";
import load from "./load";

import s9 from "style9";

const c = s9.create({
  foobar: {
    color: "turquoise",
    backgroundColor: "blue",
  },
});

export default function ClientStyles() {
  const [item, setItem] = React.useState<JSX.Element | null>(null);

  const handleLoad = React.useCallback(function handleLoadMore() {
    React.startTransition(() => {
      load().then((res) => setItem(res));
    });
  }, []);

  React.useEffect(() => {
    handleLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={styles.bar}>Client side Modules CSS</div>
      <div className={s9(c.foobar)}> Client side Style9 CSS</div>
      Component from Server action: {item}
    </div>
  );
}

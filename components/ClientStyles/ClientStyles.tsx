"use client";
import React from "react";

import styles from "./styles.module.css";
import loadSrv from "./loadSrv";

//NOTE: See `../ServerStyles/ServerStyles.tsx:5`
import loadClnt from "./loadClnt";

import s9 from "style9";

const c = s9.create({
  foobar: {
    color: "turquoise",
    backgroundColor: "blue",
  },
});

export default function ClientStyles() {
  const [itemSrv, setItemSrv] = React.useState<JSX.Element | null>(null);
  const [itemClnt, setItemClnt] = React.useState<JSX.Element | null>(null);

  const handleLoad = React.useCallback(function handleLoadMore() {
    React.startTransition(() => {
      loadSrv().then(setItemSrv);
      loadClnt().then(setItemClnt);
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
      <div>JSX from server actions</div>
      <ul>
        <li>Server: {itemSrv}</li>
        <li>Client: {itemClnt}</li>
      </ul>
    </div>
  );
}

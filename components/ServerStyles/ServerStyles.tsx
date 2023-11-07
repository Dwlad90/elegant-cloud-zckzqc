import React from "react";


//HACK: This is a hack to inject client side code from server action into the build
// import  "../SA_CLNT_Component/Component";
// import  "../SA_SRV_Component/Component";

import styles from "./styles.module.css";

import s9 from "style9";

const c = s9.create({
  foobar: {
    color: "purple",
    backgroundColor: "orangered",
  },
  sharedWithClient: {
    backgroundColor: "blue",
  },
});

export default function ServerStyles() {
  return (
    <div>
      <div className={styles.bar}>Server side Modules CSS</div>
      <div className={s9(c.foobar)}> Server side Style9 CSS</div>
      <div className={s9(c.sharedWithClient)}>
        {" "}
        Server side Style9 CSS with style shared with client component
      </div>
    </div>
  );
}

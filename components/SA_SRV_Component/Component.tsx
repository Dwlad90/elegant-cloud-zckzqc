import 'server-only';
import s9 from "style9";

const c = s9.create({
  test: {
    color: "pink",
    backgroundColor: "yellow",
  },
});

export default function SrvComponent() {
  return <span className={s9(c.test)}>Test server</span>;
}

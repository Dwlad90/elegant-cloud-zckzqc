import s9 from "style9";

const c = s9.create({
  test: {
    color: "pink",
    backgroundColor: "yellow",
  },
});

export default function Component() {
  return <div className={s9(c.test)}>Test</div>;
}

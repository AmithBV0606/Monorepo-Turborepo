import { Card } from "@repo/ui/card";
import Input from "@repo/ui/Input";
// import styles from "./page.module.css";

export default function Admin() {
  return (
    <div>
      <Input />
      <Card
        className={"background:'red'"}
        title={"Welcome"}
        href="apps/web/public/file-text.svg"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed mollitia
        maxime totam ducimus inventore labore vel cupiditate, veniam velit saepe
        perferendis voluptas exercitationem? Quam nobis, deserunt itaque
        perspiciatis qui molestias.
      </Card>
    </div>
  );
}

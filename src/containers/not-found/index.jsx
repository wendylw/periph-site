import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import styles from "./index.module.scss";

export default function NotFound() {
  useLoad(() => {
    console.log("Page loaded.", styles);
  });

  return (
    <View>
      <h2 className={styles.Index}>Test</h2>
      <Text>没找到</Text>
    </View>
  );
}

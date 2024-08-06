import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function EmptyMessage() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../../assets/clipboard.png")} />
      <View>
        <Text style={styles.textPrimary}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textSecondary}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}

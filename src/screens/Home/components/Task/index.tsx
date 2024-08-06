import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface HandleCompleteProps {
  id: string;
}

interface HandleDeleteProps {
  id: string;
}

interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
  handleComplete: ({ id }: HandleCompleteProps) => void;
  handleDelete: ({ id }: HandleDeleteProps) => void;
}

export function Task({
  id,
  title,
  completed,
  handleComplete,
  handleDelete,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => {
            handleComplete({ id });
          }}
        >
          {completed ? (
            <Image source={require("../../../../assets/check-true.png")} />
          ) : (
            <Image source={require("../../../../assets/check-false.png")} />
          )}
        </TouchableOpacity>
        <Text style={completed ? styles.completedTitle : styles.title}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          handleDelete({ id });
        }}
      >
        <Image source={require("../../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}

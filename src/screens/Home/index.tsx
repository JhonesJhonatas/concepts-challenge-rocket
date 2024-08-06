import { useCallback, useState } from "react";

import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";

import { useTodo } from "./hooks/use-todo";

import { EmptyMessage, Task } from "./components";

export function Home() {
  const {
    todos,
    counts: {completed, created},
    handlers: { handleCreate, handleComplete, handleDelete },
  } = useTodo();

  const [textValue, setTextValue] = useState("");

  const handleAddTodo = useCallback(() => {
    if (textValue.length > 3) {
      handleCreate({ title: textValue });
      setTextValue("");
    }
  }, [textValue, handleCreate]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={textValue}
          onChangeText={(text) => setTextValue(text)}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.formButton} onPress={handleAddTodo}>
          <Image source={require("../../assets/plus.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.statusDisplayContainer}>
          <View style={styles.displayArea}>
            <Text style={styles.createdDisplay}>Criadas</Text>
            <Text style={styles.displayNumber}>{created}</Text>
          </View>
          <View style={styles.displayArea}>
            <Text style={styles.completedDisplay}>Concluídas</Text>
            <Text style={styles.displayNumber}>{completed}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          return (
            <Task
              key={item.id}
              {...item}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          );
        }}
        ListEmptyComponent={<EmptyMessage />}
        style={styles.list}
      />
  
    </View>
  );
}

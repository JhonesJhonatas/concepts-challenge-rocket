import { useCallback, useState } from "react";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

interface HandleCreateProps {
  title: string;
}

interface HandleCompleteProps {
  id: string;
}

interface HandleDeleteProps {
  id: string;
}

export function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleCreate = useCallback(({ title }: HandleCreateProps) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      title,
      completed: false,
    };

    setTodos((oldState) => [...oldState, newTodo]);
  }, []);

  const handleComplete = useCallback(({ id }: HandleCompleteProps) => {
    setTodos((oldState) =>
      oldState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      })
    );
  }, []);

  const handleDelete = useCallback(({ id }: HandleDeleteProps) => {
    setTodos((oldState) => oldState.filter((todo) => todo.id !== id));
  }, []);

  return {
    todos: todos.sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      }

      if (!a.completed && b.completed) {
        return -1;
      }

      return 0;
    }),
    counts: {
      created: todos.length,
      completed: todos.filter((todo) => todo.completed).length,
    },
    handlers: {
      handleCreate,
      handleComplete,
      handleDelete,
    },
  };
}

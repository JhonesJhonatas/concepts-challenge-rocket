import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  firstContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  completeButton: {
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  completedTitle: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    padding: 20,
  }
})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  header: {
    backgroundColor: '#0D0D0D',
    paddingVertical: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: -40
  },
  input: {
    backgroundColor: '#333',
    flex: 1,
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  formButton: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer :{
    padding: 20,
  },
  statusDisplayContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  displayArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  createdDisplay: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4EA8DE'
  },
  completedDisplay: {
     fontWeight: 'bold',
     fontSize: 18,
    color: '#8284FA'
  },
  displayNumber: {
    padding: 3,
    width: 30,
    height: 30,
    fontSize: 16,
    backgroundColor: '#333333',
    color: '#ffffff',
    borderRadius: 999,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tasksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 20,
  },
  list: {
    padding: 20,
    marginBottom: 20,
  }
})
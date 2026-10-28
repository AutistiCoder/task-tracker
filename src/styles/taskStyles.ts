
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    padding: 24,
    paddingTop: 64,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#18019B',
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
    marginTop: 8,
  },
  taskList: {
    marginTop: 32,
    gap: 16,
  },
  task: {
    fontSize: 18,
    color: '#202020',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#202020',
  },
  addButton: {
    backgroundColor: '#18019B',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

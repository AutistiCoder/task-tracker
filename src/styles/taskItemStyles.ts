import { StyleSheet } from 'react-native';

export const taskItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
    color: '#202020',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  checkmark: {
    fontSize: 18,
    color: '#18019B',
    marginRight: 12,
  },
  deleteButton: {
    backgroundColor: '#FDE8E8',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 12,
  },
  deleteButtonText: {
    color: '#B42318',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
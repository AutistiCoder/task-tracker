import { Pressable, Text, View } from 'react-native';

import { Task } from '../types/Task';
import { taskItemStyles as styles } from '../styles/taskItemStyles';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
        onPress={() => onToggle(task.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.completed }}
        accessibilityLabel={task.title}
      >
        <Text style={styles.checkmark}>
          {task.completed ? '✓' : '○'}
        </Text>

        <Text
          style={[
            styles.taskText,
            task.completed && styles.completedText,
          ]}
        >
          {task.title}
        </Text>
      </Pressable>

      <Pressable
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}
        accessibilityRole="button"
        accessibilityLabel={`Delete ${task.title}`}
      >
        <Text style={styles.deleteButtonText}>
          Delete
        </Text>
      </Pressable>
    </View>
  );
}
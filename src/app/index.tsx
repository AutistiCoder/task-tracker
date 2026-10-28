
import { useState } from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { styles } from '../styles/taskStyles';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<string[]>([
    'Learn React Native',
    'Build my first screen',
    'Set up Expo',
  ]);

  const [newTask, setNewTask] = useState('');

  function addTask() {
    const trimmedTask = newTask.trim();

    if (trimmedTask === '') {
      return;
    }

    setTasks([...tasks, trimmedTask]);
    setNewTask('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>

      <Text style={styles.subtitle}>
        Stay organized, one task at a time.
      </Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          value={newTask}
          onChangeText={setNewTask}
        />

        <Pressable
          style={styles.addButton}
          onPress={addTask}
        >
          <Text style={styles.addButtonText}>
            Add Task
          </Text>
        </Pressable>
      </View>

      <View style={styles.taskList}>
        {tasks.map((task, index) => (
          <Text key={index} style={styles.task}>
            {task}
          </Text>
        ))}
      </View>
    </View>
  );
}

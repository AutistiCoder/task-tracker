import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import TaskItem from '../components/TaskItem';
import { styles } from '../styles/taskStyles';
import { Task } from '../types/Task';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Learn React Native',
      completed: false,
    },
    {
      id: '2',
      title: 'Build my first screen',
      completed: false,
    },
    {
      id: '3',
      title: 'Set up Expo',
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState('');

  function addTask() {
    const trimmedTask = newTask.trim();

    if (trimmedTask === '') {
      return;
    }

    const task: Task = {
      id: `${Date.now()}-${Math.random()}`,
      title: trimmedTask,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, task]);
    setNewTask('');
  }

  function toggleTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
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

      <ScrollView
        style={styles.taskList}
        contentContainerStyle={{ gap: 16, paddingBottom: 24 }}
      >
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ScrollView>
    </View>
  );
}
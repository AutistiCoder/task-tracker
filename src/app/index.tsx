
import { Text, View } from 'react-native';
import { styles } from '../styles/taskStyles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <Text style={styles.subtitle}>
        Stay organized, one task at a time.
      </Text>

      <View style={styles.taskList}>
        <Text style={styles.task}>Learn React Native</Text>
        <Text style={styles.task}>Build my first screen</Text>
        <Text style={styles.task}>Set up Expo</Text>
      </View>
    </View>
  );
}

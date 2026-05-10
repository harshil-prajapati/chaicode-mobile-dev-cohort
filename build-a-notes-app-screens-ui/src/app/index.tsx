import React, { useState } from "react";

import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { dark, light, styles } from "./theme";

export default function HomeScreen() {
  const systemTheme = useColorScheme();

  const [darkMode, setDarkMode] = useState(
    systemTheme === "dark"
  );

  const [selectedNote, setSelectedNote] = useState<any>(null);

  const { width } = useWindowDimensions();

  const colors = darkMode ? dark : light;

  const isTablet = width > 700;

  const notes = [
    { id: "1", title: "Harshil Prajapati", content: "This is my first note.", date: "Today" },
    { id: "2", title: "College List", content: "1.Manipal University\n2. DAIICT\n3. Nirma University", date: "Yesterday" },
    { id: "3", title: "Project Ideas", content: "1. Notes App\n2. Weather App\n3. Expense Tracker", date: "2 days ago" },
  ];

  if (selectedNote) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
          <ImageBackground
            source={{ uri: "https://images.unsplash.com/photo-1600783245891-f275a1575d93" }}
            style={styles.header}
            imageStyle={styles.headerImage}
          >
            <Text style={[styles.headerTitle, { color: darkMode ? "#fff" : "#000" }]}>
              Edit Note
            </Text>
          </ImageBackground>

          <View style={{ marginTop: 20 }}>
            <TextInput
              defaultValue={selectedNote.title}
              placeholder="Title"
              placeholderTextColor={colors.sub}
              style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
            />

            <TextInput
              multiline
              textAlignVertical="top"
              defaultValue={selectedNote.content}
              placeholder="Write note..."
              placeholderTextColor={colors.sub}
              style={[styles.body, { backgroundColor: colors.card, color: colors.text }]}
            />

            <View style={styles.buttons}>
              <Pressable onPress={() => setSelectedNote(null)} style={[styles.button, { backgroundColor: "#EF4444" }]}>
                <Text style={styles.buttonText}>Back</Text>
              </Pressable>

              <Pressable style={[styles.button, { backgroundColor: colors.primary }]}>
                <Text style={[styles.buttonText, { color: darkMode ? "#000" : "#fff" }]}>Save</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>

      <View style={[styles.row, { marginBottom: 20 }]}>
        <Text style={[styles.title, { color: colors.text }]}>My Notes</Text>

        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        numColumns={isTablet ? 2 : 1}
        columnWrapperStyle={isTablet && { justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View style={{ width: isTablet ? "48%" : "100%" }}>
            <Pressable
              onPress={() => setSelectedNote(item)}
              style={({ pressed }) =>
                StyleSheet.compose(styles.card, {
                  backgroundColor: colors.card,
                  opacity: pressed ? 0.8 : 1,
                })
              }
            >
              <Text style={[styles.cardTitle, { color: colors.text }]}>{item.title}</Text>
              <Text style={[styles.text, { color: colors.sub }]}>{item.content}</Text>
              <Text style={[styles.date, { color: colors.sub }]}>{item.date}</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
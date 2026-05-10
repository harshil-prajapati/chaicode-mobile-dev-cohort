import { StyleSheet } from "react-native";

export const light = {
  bg: "#FFFFFF",
  card: "#F3F4F6",
  text: "#111111",
  sub: "#6B7280",
  primary: "#000000",
};

export const dark = {
  bg: "#000000",
  card: "#18181B",
  text: "#FFFFFF",
  sub: "#A1A1AA",
  primary: "#FFFFFF",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
  },
  card: {
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
  },
  date: {
    fontSize: 12,
    marginTop: 10,
  },
  header: {
    height: 220,
    justifyContent: "flex-end",
    padding: 24,
    marginHorizontal: -20,
    marginTop: -20,
  },
  headerImage: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: "800",
  },
  input: {
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "600",
  },
  body: {
    minHeight: 250,
    borderRadius: 18,
    padding: 18,
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 24,
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
});
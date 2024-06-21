import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export default function Pdf() {
  const styles = StyleSheet.create({
    Document: {},
    page: {
      flexDirection: "column",
      backgroundColor: "#fff",
    },
    section: {
      margin: 10,
      padding: 10,
      flexDirection: "row",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>
            Section #1
          </Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}

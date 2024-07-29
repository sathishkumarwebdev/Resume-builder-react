import React from "react";
import { Page, Text, View, Document, StyleSheet,title,Line,Svg } from "@react-pdf/renderer";

export default function Pdf() {
  const themeColor="red";
  const styles = StyleSheet.create({
    Document: {},
    page: {
      // flexDirection: "column",
      // backgroundColor: "#fff",
      // margin: "10px",
      padding: "20px",
      // width:"90%",

      border: "1px solid black",
    },
    section: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: "10px",
    },
    titleName: {
      justifyContent: "center",
      // width:"100%",
      // marginLeft: "10px",
      // border:"1px solid black",
      textAlign: "center",
      fontSize: "30px",
      borderBottom: "2px solid black",
      paddingBottom: "5px",
      margin: "10px 10px 0px 10px ",
    },
    profession: {
      textAlign: "center",
      borderBottom: "2px solid black",
      paddingBottom: "10px",
      margin: "10px",
    },
    leftSection: {
      width: "200px",
      border: "1px solid black",
    },
  });

  const firstName="RamKumar"
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <View>
            <Text style={styles.titleName}>{firstName}</Text>
          </View>

          <View style={styles.profession}>
            <Text>Front End Developer</Text>
          </View>
          <View style={styles.section}>
            <View style={styles.leftSection}>
              <Text>Contact</Text>
              <Text>name</Text>
            </View>
            <View>
              <Text>Front End Developer</Text>
            </View>
          </View>
        </View>
        {/* <View>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </View> */}
      </Page>
    </Document>
  );
}

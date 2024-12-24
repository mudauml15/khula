import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const UploadPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");

  const sections = [
    {
      title: "Applicant ID document",
      description: "Upload a certified version of your ID document.",
    },
    {
      title: "Directors ID documents",
      description: "Upload all directors ID documents.",
    },
    {
      title: "Company registration documents",
      description: "COR 14.3, COR 15.3 or CM1, CM2 or CM9 from CIPC.",
    },
  ];

  const handleUploadClick = (sectionTitle) => {
    setSelectedSection(sectionTitle);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>Upload supporting documents</Text>
        <Text style={styles.headerSubtitle}>
          Submit the required documents by uploading files or capturing photos
          to complete your application and verify your information.
        </Text>

        {sections.map((section, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{section.title}</Text>
            <Text style={styles.cardDescription}>{section.description}</Text>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => handleUploadClick(section.title)}
            >
              <Ionicons name="add" size={20} color="#00A676" />
              <Text style={styles.uploadText}>Tap here to upload</Text>
            </TouchableOpacity>
            <Text style={styles.supportText}>
              Supported: JPG, PDF, PNG. Maximum file size: 10MB
            </Text>
          </View>
        ))}
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBottomContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Upload {selectedSection}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={30} color="#003E59" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalDescription}>
              Choose an option to upload your file.
            </Text>

            <TouchableOpacity style={styles.modalButton}>
              <View style={styles.iconContainer}>
                <Ionicons name="camera" size={24} color="#00a676df" />
              </View>
              <Text style={styles.modalButtonText}>Take a Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton}>
              <View style={styles.iconContainer}>
                <Ionicons name="image" size={24} color="#00a676df" />
              </View>
              <Text style={styles.modalButtonText}>Choose from Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton}>
              <View style={styles.iconContainer}>
                <Ionicons name="cloud-upload" size={24} color="#00a676df" />
              </View>
              <Text style={styles.modalButtonText}>Upload File</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002B4C",
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#002B4C",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "gray",
    marginBottom: 15,
  },
  uploadButton: {
    backgroundColor: "#E8F7EF",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00A676",
    marginLeft: 8,
  },
  supportText: {
    fontSize: 12,
    color: "gray",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalBottomContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "flex-start",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#002B4C",
  },
  modalDescription: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
    borderColor: "#d6d1ce",
    borderWidth: 1,
  },
  modalButtonText: {
    paddingTop: 10,
    color: "#003E59",
    fontSize: 16,
    fontWeight: "normal",
    marginLeft: 8,
  },
  iconContainer: {
    backgroundColor: "#bff4d8",
    borderRadius: 10,
    padding: 8,
  },
});
export default UploadPage;

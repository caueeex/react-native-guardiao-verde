import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Home = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const MenuItem = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={24} color="#2E7D32" />
      <Text style={styles.menuItemText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Guardião Verde</Text>
          <Text style={styles.subtitle}>Protegendo nossas florestas</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Estatísticas Globais</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statsCard}>
              <Ionicons name="leaf-outline" size={32} color="#2E7D32" />
              <Text style={styles.statsNumber}>27,000</Text>
              <Text style={styles.statsLabel}>Hectares perdidos hoje</Text>
            </View>
            <View style={styles.statsCard}>
              <Ionicons name="trending-down" size={32} color="#2E7D32" />
              <Text style={styles.statsNumber}>-15%</Text>
              <Text style={styles.statsLabel}>Redução este mês</Text>
            </View>
          </View>
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="book-outline" size={24} color="#fff" />
              <Text style={styles.actionButtonText}>Aprender</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="map-outline" size={24} color="#fff" />
              <Text style={styles.actionButtonText}>Mapa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="trophy-outline" size={24} color="#fff" />
              <Text style={styles.actionButtonText}>Desafios</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.featuredContent}>
          <Text style={styles.sectionTitle}>Conteúdo em Destaque</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contentScroll}>
            <TouchableOpacity style={styles.contentCard}>
              <Ionicons name="warning-outline" size={32} color="#2E7D32" />
              <Text style={styles.contentTitle}>Causas do Desmatamento</Text>
              <Text style={styles.contentDescription}>Entenda os principais fatores que contribuem para o desmatamento.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentCard}>
              <Ionicons name="hand-left-outline" size={32} color="#2E7D32" />
              <Text style={styles.contentTitle}>Como Ajudar</Text>
              <Text style={styles.contentDescription}>Descubra ações práticas para combater o desmatamento.</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={toggleMenu}>
          <View style={styles.menuContainer}>
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>Menu</Text>
              <TouchableOpacity onPress={toggleMenu}>
                <Ionicons name="close" size={28} color="#2E7D32" />
              </TouchableOpacity>
            </View>
            <MenuItem icon="home-outline" title="Início" onPress={toggleMenu} />
            <MenuItem icon="book-outline" title="Aprender" onPress={toggleMenu} />
            <MenuItem icon="map-outline" title="Mapa" onPress={toggleMenu} />
            <MenuItem icon="leaf-outline" title="Carbono" onPress={toggleMenu} />
            <MenuItem icon="people-outline" title="Comunidade" onPress={toggleMenu} />
            <MenuItem icon="settings-outline" title="Configurações" onPress={toggleMenu} />
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E7D32',
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuButton: {
    marginRight: 16,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  scrollView: {
    flex: 1,
  },
  statsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: (width - 48) / 2,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginTop: 8,
  },
  statsLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  quickActions: {
    padding: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 4,
  },
  featuredContent: {
    padding: 16,
  },
  contentScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  contentCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginRight: 16,
    width: 280,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
    marginBottom: 8,
  },
  contentDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 16,
    color: '#333',
  },
});

export default Home; 
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Learn = () => {
  const navigation = useNavigation();

  const educationalContent = [
    {
      id: 1,
      title: 'O que é Desmatamento?',
      description: 'Entenda o conceito e as principais causas do desmatamento em nosso planeta.',
      fullContent: 'O desmatamento é a remoção de florestas sem reposição de árvores. É impulsionado por atividades como agricultura, pecuária, mineração e expansão urbana. Suas consequências incluem perda de biodiversidade, mudanças climáticas, erosão do solo e escassez de água.',
      type: 'article',
    },
    {
      id: 2,
      title: 'Impactos Ambientais',
      description: 'Conheça as consequências do desmatamento para o meio ambiente e a biodiversidade.',
      fullContent: 'O desmatamento causa a perda de habitats para diversas espécies, levando à extinção. Contribui para o aquecimento global liberando CO2, e afeta o ciclo da água, causando secas e inundações. O solo se torna infértil e a qualidade do ar piora.',
      type: 'video',
    },
    {
      id: 3,
      title: 'Soluções Sustentáveis',
      description: 'Descubra práticas e iniciativas que podem ajudar a combater o desmatamento.',
      fullContent: 'Soluções incluem o reflorestamento, a promoção da agricultura sustentável, o combate à mineração ilegal, a educação ambiental e o consumo consciente. Iniciativas globais e locais visam proteger as florestas e incentivar práticas ecológicas.',
      type: 'infographic',
    },
  ];

  const navigateToContentDetail = (content) => {
    navigation.navigate('ContentDetail', content);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Aprender</Text>
          <Text style={styles.subtitle}>Conhecimento para mudança</Text>
        </View>

        <View style={styles.quizSection}>
          <Text style={styles.sectionTitle}>Teste seu Conhecimento</Text>
          <TouchableOpacity style={styles.quizCard}>
            <Text style={styles.quizTitle}>Quiz do Guardião Verde</Text>
            <Text style={styles.quizDescription}>
              Responda perguntas sobre desmatamento e ganhe emblemas!
            </Text>
            <TouchableOpacity style={styles.quizButton}>
              <Text style={styles.quizButtonText}>Iniciar Quiz</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>Conteúdo Educativo</Text>
          {educationalContent.map((content) => (
            <TouchableOpacity key={content.id} style={styles.contentCard} onPress={() => navigateToContentDetail(content)}>
              <View style={styles.contentTypeBadge}>
                <Text style={styles.contentTypeText}>{content.type}</Text>
              </View>
              <Text style={styles.contentTitle}>{content.title}</Text>
              <Text style={styles.contentDescription}>{content.description}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.resourcesSection}>
          <Text style={styles.sectionTitle}>Recursos Adicionais</Text>
          <TouchableOpacity style={styles.resourceCard}>
            <Text style={styles.resourceTitle}>Glossário Ambiental</Text>
            <Text style={styles.resourceDescription}>
              Termos e conceitos importantes sobre conservação ambiental
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resourceCard}>
            <Text style={styles.resourceTitle}>Biblioteca de Vídeos</Text>
            <Text style={styles.resourceDescription}>
              Documentários e vídeos educativos sobre desmatamento
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2E7D32',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  quizSection: {
    padding: 20,
  },
  quizCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  quizDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  quizButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  quizButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentSection: {
    padding: 20,
  },
  contentCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contentTypeBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  contentTypeText: {
    color: '#2E7D32',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  contentDescription: {
    fontSize: 14,
    color: '#666',
  },
  resourcesSection: {
    padding: 20,
    paddingBottom: 40,
  },
  resourceCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resourceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  resourceDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default Learn; 
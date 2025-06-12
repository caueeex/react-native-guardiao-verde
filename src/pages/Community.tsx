import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Community = () => {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'Maria Silva',
      content: 'Acabei de plantar minha primeira árvore! 🌱',
      likes: 45,
      comments: 12,
      time: '2h atrás',
    },
    {
      id: 2,
      user: 'João Santos',
      content: 'Participando do desafio de reciclagem. Dia 3 e indo bem! ♻️',
      likes: 32,
      comments: 8,
      time: '4h atrás',
    },
  ]);

  const challenges = [
    {
      id: 1,
      title: 'Desafio da Árvore',
      description: 'Plante uma árvore e compartilhe sua experiência',
      participants: 1234,
      progress: 75,
    },
    {
      id: 2,
      title: 'Sem Carne por um Dia',
      description: 'Reduza seu impacto ambiental evitando carne',
      participants: 856,
      progress: 60,
    },
  ];

  const handlePostSubmit = () => {
    if (newPost.trim() === '') {
      Alert.alert('Erro', 'Por favor, digite algo para publicar.');
      return;
    }
    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    const now = new Date();
    const newPostObject = {
      id: newId,
      user: 'Você', // Assuming the current user for demonstration
      content: newPost.trim(),
      likes: 0,
      comments: 0,
      time: `${now.getHours()}:${now.getMinutes()} ${now.getDate()}/${now.getMonth() + 1}`,
    };
    setPosts([newPostObject, ...posts]);
    setNewPost('');
    Alert.alert('Sucesso', 'Seu post foi publicado!');
  };

  const handleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleComment = (id) => {
    Alert.alert('Comentar', 'Funcionalidade de comentários em desenvolvimento.');
    // In a real app, you would navigate to a comment screen or open a modal
  };

  const handleShare = () => {
    Alert.alert('Compartilhar', 'Funcionalidade de compartilhamento em desenvolvimento.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Comunidade</Text>
          <Text style={styles.subtitle}>Juntos por um planeta melhor</Text>
        </View>

        <View style={styles.createPost}>
          <TextInput
            style={styles.postInput}
            placeholder="Compartilhe sua ação ambiental..."
            value={newPost}
            onChangeText={setNewPost}
            multiline
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.postButton} onPress={handlePostSubmit}>
            <Ionicons name="send" size={20} color="#fff" />
            <Text style={styles.postButtonText}>Publicar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.challengesSection}>
          <Text style={styles.sectionTitle}>Desafios Ativos</Text>
          {challenges.map((challenge) => (
            <TouchableOpacity key={challenge.id} style={styles.challengeCard}>
              <View style={styles.challengeHeader}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <Text style={styles.participants}>
                  {challenge.participants} participantes
                </Text>
              </View>
              <Text style={styles.challengeDescription}>
                {challenge.description}
              </Text>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${challenge.progress}%` },
                  ]}
                />
              </View>
              <Text style={styles.progressText}>{challenge.progress}%</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.feedSection}>
          <Text style={styles.sectionTitle}>Feed da Comunidade</Text>
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.userInfo}>
                  <View style={styles.avatar} />
                  <Text style={styles.userName}>{post.user}</Text>
                </View>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>
              <Text style={styles.postContent}>{post.content}</Text>
              <View style={styles.postActions}>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(post.id)}>
                  <Ionicons name="thumbs-up-outline" size={18} color="#666" />
                  <Text style={styles.actionText}>{post.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleComment(post.id)}>
                  <Ionicons name="chatbox-outline" size={18} color="#666" />
                  <Text style={styles.actionText}>{post.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
                  <Ionicons name="share-outline" size={18} color="#666" />
                  <Text style={styles.actionText}>Compartilhar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
  createPost: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  postInput: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    minHeight: 80,
    textAlignVertical: 'top',
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  postButton: {
    backgroundColor: '#2E7D32',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  challengesSection: {
    paddingHorizontal: 16,
    paddingTop: 0,
    marginBottom: 20,
  },
  challengeCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flexShrink: 1,
    marginRight: 10,
  },
  participants: {
    fontSize: 14,
    color: '#666',
  },
  challengeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 5,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  feedSection: {
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 20,
  },
  postCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#B0E0E6',
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postTime: {
    fontSize: 12,
    color: '#999',
  },
  postContent: {
    fontSize: 15,
    color: '#444',
    marginBottom: 10,
    lineHeight: 22,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  actionText: {
    marginLeft: 5,
    color: '#666',
    fontSize: 14,
  },
});

export default Community; 
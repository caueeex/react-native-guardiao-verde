import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CarbonCalculator = () => {
  const [formData, setFormData] = useState({
    paperUsage: '',
    travelDistance: '',
    meatConsumption: '',
    electricityUsage: '',
    recycling: false,
  });

  const [result, setResult] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const calculateCarbonFootprint = () => {
    setErrorMessage(null);
    const paper = parseFloat(formData.paperUsage) || 0;
    const travel = parseFloat(formData.travelDistance) || 0;
    const meat = parseFloat(formData.meatConsumption) || 0;
    const electricity = parseFloat(formData.electricityUsage) || 0;
    const recyclingBonus = formData.recycling ? -0.2 : 0;

    if (paper < 0 || travel < 0 || meat < 0 || electricity < 0) {
      setErrorMessage('Por favor, insira valores positivos para o consumo.');
      setResult(null);
      return;
    }

    const carbonFromPaper = paper * 0.8;
    const carbonFromTravel = travel * 0.15;
    const carbonFromMeat = meat * 10;
    const carbonFromElectricity = electricity * 0.5;

    const total = (carbonFromPaper + carbonFromTravel + carbonFromMeat + carbonFromElectricity + recyclingBonus) / 1000;
    setResult(total);
  };

  const resetForm = () => {
    setFormData({
      paperUsage: '',
      travelDistance: '',
      meatConsumption: '',
      electricityUsage: '',
      recycling: false,
    });
    setResult(null);
    setErrorMessage(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Calculadora de Carbono</Text>
          <Text style={styles.subtitle}>Calcule seu impacto ambiental</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Entrada de Dados</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Uso de Papel (kg/mês)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={formData.paperUsage}
              onChangeText={(text) =>
                setFormData({ ...formData, paperUsage: text.replace(/[^0-9.]/g, '') })
              }
              placeholder="Ex: 5"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Distância de Viagem (km/mês)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={formData.travelDistance}
              onChangeText={(text) =>
                setFormData({ ...formData, travelDistance: text.replace(/[^0-9.]/g, '') })
              }
              placeholder="Ex: 100"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Consumo de Carne (kg/mês)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={formData.meatConsumption}
              onChangeText={(text) =>
                setFormData({ ...formData, meatConsumption: text.replace(/[^0-9.]/g, '') })
              }
              placeholder="Ex: 10"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Uso de Eletricidade (kWh/mês)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={formData.electricityUsage}
              onChangeText={(text) =>
                setFormData({ ...formData, electricityUsage: text.replace(/[^0-9.]/g, '') })
              }
              placeholder="Ex: 200"
            />
          </View>

          <View style={styles.switchGroup}>
            <Text style={styles.label}>Pratica Reciclagem?</Text>
            <Switch
              value={formData.recycling}
              onValueChange={(value) =>
                setFormData({ ...formData, recycling: value })
              }
              trackColor={{ false: '#767577', true: '#4CAF50' }}
              thumbColor={formData.recycling ? '#2E7D32' : '#f4f3f4'}
            />
          </View>

          {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.calculateButton}
              onPress={calculateCarbonFootprint}
            >
              <Ionicons name="calculator-outline" size={20} color="#fff" />
              <Text style={styles.calculateButtonText}>Calcular</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.calculateButton, styles.resetButton]}
              onPress={resetForm}
            >
              <Ionicons name="refresh-outline" size={20} color="#fff" />
              <Text style={styles.calculateButtonText}>Redefinir</Text>
            </TouchableOpacity>
          </View>

          {result !== null && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultTitle}>Sua Pegada de Carbono</Text>
              <Text style={styles.resultValue}>
                {result.toFixed(2)} toneladas de CO₂/mês
              </Text>
              <Text style={styles.resultDescription}>
                {result < 0.5
                  ? 'Parabéns! Seu impacto ambiental é muito baixo. Você é um verdadeiro Guardião Verde!'
                  : result < 1.5
                  ? 'Ótimo! Seu impacto ambiental está abaixo da média. Continue assim!'
                  : result < 3
                  ? 'Seu impacto está na média. Pequenas mudanças podem fazer uma grande diferença!'
                  : 'Seu impacto está acima da média. Considere mudanças significativas em seus hábitos.'}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.sectionTitle}>Dicas para Reduzir sua Pegada</Text>
          <View style={styles.tipCard}>
            <Ionicons name="leaf-outline" size={24} color="#2E7D32" />
            <View style={styles.tipTextContent}>
              <Text style={styles.tipTitle}>Reduza o Uso de Papel</Text>
              <Text style={styles.tipDescription}>
                Opte por documentos digitais e imprima apenas quando necessário. Recicle todo o papel que puder.
              </Text>
            </View>
          </View>
          <View style={styles.tipCard}>
            <Ionicons name="bus-outline" size={24} color="#2E7D32" />
            <View style={styles.tipTextContent}>
              <Text style={styles.tipTitle}>Transporte Sustentável</Text>
              <Text style={styles.tipDescription}>
                Use transporte público, bicicleta, ou carona solidária. Se possível, prefira carros elétricos ou híbridos.
              </Text>
            </View>
          </View>
          <View style={styles.tipCard}>
            <Ionicons name="restaurant-outline" size={24} color="#2E7D32" />
            <View style={styles.tipTextContent}>
              <Text style={styles.tipTitle}>Consumo Consciente</Text>
              <Text style={styles.tipDescription}>
                Reduza o consumo de carne (especialmente carne vermelha), escolha produtos locais e da estação.
              </Text>
            </View>
          </View>
          <View style={styles.tipCard}>
            <Ionicons name="flash-outline" size={24} color="#2E7D32" />
            <View style={styles.tipTextContent}>
              <Text style={styles.tipTitle}>Eficiência Energética</Text>
              <Text style={styles.tipDescription}>
                Use lâmpadas LED, desligue aparelhos da tomada e otimize o uso de aquecedores e ar condicionados.
              </Text>
            </View>
          </View>
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
  scrollViewContent: {
    paddingBottom: 20,
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
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  switchGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
  },
  errorMessage: {
    color: '#D32F2F',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  calculateButton: {
    backgroundColor: '#2E7D32',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  resetButton: {
    backgroundColor: '#757575',
  },
  resultContainer: {
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 5,
    borderLeftColor: '#2E7D32',
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 15,
  },
  resultDescription: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
  },
  tipsContainer: {
    padding: 20,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  tipCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tipTextContent: {
    marginLeft: 10,
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  tipDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default CarbonCalculator; 
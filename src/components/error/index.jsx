import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AppColors from '../../ui/appColor';
import AppStyles from '../../ui/appStyles';

const Error = ({ message, onretry }) => {
  return (
    <View style={AppStyles.centerContainer}>
      <Text style={AppStyles.errorText}>{message}</Text>

      {onretry && (
        <TouchableOpacity style={AppStyles.retryButton}>
          <Text style={AppStyles.retryText}>Tekrar Dene</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Error;

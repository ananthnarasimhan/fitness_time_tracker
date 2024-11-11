import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default class PieScreen extends Component {
  render() {
    const data = [
      { value: 80},
      { value: 30},
      { value: 10},
    ];

    const labelVal = new Map([
      [80,'sleep'],
      [30, 'youtube'],
      [10, 'eat']
    ])
    
    const size = {
      width: 280,
      height: 200,
      margin: { left : 5 } 
    };

    return (
      <View style = {{paddingLeft: 15, left: 30 , top:30}}>
      <PieChart
      series={[
        {
          arcLabel: (item) => `${labelVal.get(item.value)}`,
          arcLabelMinAngle: 25,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
      slotProps={{paddingLeft: 100}}
    />
    </View>
    )
  }
}
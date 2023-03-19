import React from 'react';
import { PanelProps } from '@grafana/data';
import { PieChart } from './src/PieChart';

export const SimplePiePanel: React.FC<PanelProps> = ({ width, height }) => {
  return (
    <div style={{ width, height }}>
      <PieChart />
    </div>
  );
};
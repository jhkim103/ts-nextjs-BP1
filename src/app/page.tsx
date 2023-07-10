'use client';
import Title from './components/Title';
import { useState } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import 'antd/dist/reset.css';

export default function Home() {
  return (
    <div>
      <Title>MSP CS ADMIN</Title>
      <p>powered by raidea.</p>
    </div>
  );
}

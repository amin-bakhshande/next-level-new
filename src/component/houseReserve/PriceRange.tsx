'use client';

import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type Props = {
  onChange: (range: [number, number]) => void;
};

export default function PriceRange({ onChange }: Props) {
  const [range, setRange] = useState<[number, number]>([500000000, 3000000000]);

  const handleChange = (value: number | number[]) => {
    const val = value as [number, number];
    setRange(val);
    onChange(val);
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">
        رنج قیمت (تومان)
      </label>
      <Slider
        range
        min={100000000}
        max={5000000000}
        step={10000000}
        defaultValue={range}
        onChange={handleChange}
        trackStyle={[{ backgroundColor: '#f97316' }]}
        handleStyle={[
          { borderColor: '#f97316', backgroundColor: '#f97316' },
          { borderColor: '#f97316', backgroundColor: '#f97316' },
        ]}
        railStyle={{ backgroundColor: '#d1d5db' }}
      />
      <div className="flex justify-between text-sm text-gray-500 dark:text-gray-300 mt-2">
        <span>{range[0].toLocaleString()} تومان</span>
        <span>{range[1].toLocaleString()} تومان</span>
      </div>
    </div>
  );
}

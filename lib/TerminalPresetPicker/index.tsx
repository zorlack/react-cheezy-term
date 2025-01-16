import React, { useState, useEffect } from 'react';
import { TerminalConfig } from '../ReactCheezyTerm';

export interface TerminalPresetPickerProps {
  onPresetChange: (config: TerminalConfig) => void;
}

export const TerminalPresetPicker: React.FC<TerminalPresetPickerProps> = ({ onPresetChange }) => {
  const [selectedPreset, setSelectedPreset] = useState<string>('');
  const [presetOptions, setPresetOptions] = useState<Record<string, TerminalConfig>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load presets at runtime via HTTP
  useEffect(() => {
    const fetchPresets = async () => {
      try {
        const response = await fetch('./react-cheezy-term/presets.json');
        if (!response.ok) {
          throw new Error(`Failed to load presets: ${response.statusText}`);
        }
        const data = await response.json();
        setPresetOptions(data);
  
        // Set the default selection (first key in the presets object)
        const defaultPreset = Object.keys(data)[0];
        if (defaultPreset) {
          setSelectedPreset(defaultPreset);
          onPresetChange(data[defaultPreset]); // Notify parent only once
        }
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };
    
      fetchPresets();
      // Empty dependency array ensures this runs only once
    }, []); // <-- No dependencies here

  // Handle selection change
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const presetKey = event.target.value;
    setSelectedPreset(presetKey);

    // Notify parent of the selected preset
    if (presetOptions[presetKey]) {
      onPresetChange(presetOptions[presetKey]);
    }
  };

  if (loading) {
    return <div>Loading presets...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <label htmlFor="preset-picker">Select Terminal Preset: </label>
      <select id="preset-picker" value={selectedPreset} onChange={handleChange}>
        {Object.keys(presetOptions).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

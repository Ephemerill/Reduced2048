import { themes, useTheme } from '@/contexts/ThemeContext';
import styles from '@/styles/theme-selector.module.css';
import { useRef } from 'react';

export default function ThemeSelector() {
  const { currentTheme, setTheme } = useTheme();
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleContainerClick = () => {
    selectRef.current?.click();
  };

  return (
    <div className={styles.themeSelector} onClick={handleContainerClick}>
      <label htmlFor="theme-select"></label>
      <select
        ref={selectRef}
        id="theme-select"
        value={currentTheme.id}
        onChange={(e) => {
          const selected = themes.find((theme) => theme.id === e.target.value);
          if (selected) setTheme(selected);
        }}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
} 
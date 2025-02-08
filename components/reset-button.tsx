import styles from '@/styles/reset-button.module.css';

type ResetButtonProps = {
  onReset: () => void;
};

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button className={styles.resetButton} onClick={onReset}>
      Reset Game
    </button>
  );
} 
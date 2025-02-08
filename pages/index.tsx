import Head from "next/head";
import Image from "next/image";
import Board from "@/components/board";
import Score from "@/components/score";
import ThemeSelector from "@/components/theme-selector";
import ResetButton from "@/components/reset-button";
import { ThemeProvider } from "@/contexts/ThemeContext";
import styles from "@/styles/index.module.css";
import { useCallback } from "react";

export default function Home() {
  const handleReset = useCallback(() => {
    // This will force a remount of the Board component
    window.location.reload();
  }, []);

  return (
    <ThemeProvider>
      <div className={styles.twenty48}>
        <Head>
          <title>Reduced Price 2048!</title>
          <meta
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="apple-touch-icon.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon16.png" />
        </Head>
        <header>
          <h1>Reduced 2048</h1>
          <div className={styles.controls}>
            <Score />
            <ResetButton onReset={handleReset} />
          </div>
        </header>
        <main>
          <Board />
          <div className={styles.themeWrapper}>
            <ThemeSelector />
          </div>
          <h2>Happy Valentines day!</h2>
        </main>
      </div>
    </ThemeProvider>
  );
}

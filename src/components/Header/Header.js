"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";
import { SoundEnabledContext } from "../../components/SoundEnabledProvider";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";

function Header() {
  const { soundEnabled, setSoundEnabled } =
    React.useContext(SoundEnabledContext);
  const id = React.useId();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            setSoundEnabled(!soundEnabled);
          }}
        >
          {soundEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {soundEnabled ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;

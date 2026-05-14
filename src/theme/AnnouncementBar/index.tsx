import React, {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import { useAnnouncementBar } from "@docusaurus/theme-common/internal";
import AnnouncementBarCloseButton from "@theme/AnnouncementBar/CloseButton";
import AnnouncementBarContent from "@theme/AnnouncementBar/Content";

import styles from "./styles.module.css";

const DISMISSED_AT_STORAGE_KEY = "runme.visrAnnouncement.dismissedAt";
const DOCUSAURUS_DISMISS_STORAGE_KEY = "docusaurus.announcement.dismiss";
const DISMISSED_ATTRIBUTE = "data-runme-visr-announcement-dismissed";
const DISMISS_TTL_MS = 48 * 60 * 60 * 1000;

function getDismissedAt(now = Date.now()): number | null {
  try {
    const value = window.localStorage.getItem(DISMISSED_AT_STORAGE_KEY);
    if (!value) {
      return null;
    }

    const dismissedAt = Number(value);
    if (!Number.isFinite(dismissedAt) || now - dismissedAt >= DISMISS_TTL_MS) {
      window.localStorage.removeItem(DISMISSED_AT_STORAGE_KEY);
      window.localStorage.setItem(DOCUSAURUS_DISMISS_STORAGE_KEY, "false");
      return null;
    }

    return dismissedAt;
  } catch {
    return null;
  }
}

function syncDocumentDismissedState(isDismissed: boolean): void {
  document.documentElement.setAttribute(
    DISMISSED_ATTRIBUTE,
    String(isDismissed),
  );
}

export default function AnnouncementBar(): ReactNode {
  const { announcementBar } = useThemeConfig();
  const { close: closeDocusaurusAnnouncementBar } = useAnnouncementBar();
  const [dismissedAt, setDismissedAt] = useState<number | null>(null);

  useEffect(() => {
    const storedDismissedAt = getDismissedAt();
    setDismissedAt(storedDismissedAt);
    syncDocumentDismissedState(storedDismissedAt !== null);
  }, []);

  const close = useCallback(() => {
    const nextDismissedAt = Date.now();

    try {
      window.localStorage.setItem(
        DISMISSED_AT_STORAGE_KEY,
        String(nextDismissedAt),
      );
      window.localStorage.setItem(DOCUSAURUS_DISMISS_STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors; the in-memory state still closes the bar.
    }

    setDismissedAt(nextDismissedAt);
    syncDocumentDismissedState(true);
    closeDocusaurusAnnouncementBar();
  }, [closeDocusaurusAnnouncementBar]);

  const isActive = useMemo(() => {
    if (!announcementBar) {
      return false;
    }

    return dismissedAt === null;
  }, [announcementBar, dismissedAt]);

  if (!isActive) {
    return null;
  }

  const { backgroundColor, textColor, isCloseable } = announcementBar;

  return (
    <div
      className={styles.announcementBar}
      style={{ backgroundColor, color: textColor }}
      role="banner">
      {isCloseable && <div className={styles.announcementBarPlaceholder} />}
      <AnnouncementBarContent className={styles.announcementBarContent} />
      {isCloseable && (
        <AnnouncementBarCloseButton
          onClick={close}
          className={styles.announcementBarClose}
        />
      )}
    </div>
  );
}

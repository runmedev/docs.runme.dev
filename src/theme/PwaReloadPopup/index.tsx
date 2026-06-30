import React, { type ReactNode } from "react";

type Props = {
  onReload: () => void;
};

export default function PwaReloadPopup({ onReload }: Props): ReactNode {
  return (
    <div
      role="alert"
      style={{
        position: "fixed",
        right: "1rem",
        bottom: "1rem",
        zIndex: 1000,
        maxWidth: "24rem",
        padding: "0.875rem 1rem",
        borderRadius: "0.375rem",
        background: "var(--ifm-background-surface-color)",
        boxShadow: "var(--ifm-global-shadow-md)",
      }}
    >
      <div style={{ marginBottom: "0.75rem" }}>
        A new version is available.
      </div>
      <button className="button button--primary button--sm" onClick={onReload}>
        Reload
      </button>
    </div>
  );
}

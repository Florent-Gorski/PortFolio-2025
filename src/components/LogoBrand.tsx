import React, { useState } from "react";

/**
 * Affiche le logo marque avec fallback robuste :
 * 1) /favicon.svg  2) /favicon.png  3) /favicon.ico  4) badge texte "FG"
 */
const sources = ["/favicon.svg", "/favicon.png", "/favicon.ico"];

const LogoBrand: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = "" }) =>
{
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () =>
  {
    if (idx < sources.length - 1) setIdx(idx + 1);
    else setFailed(true);
  };

  if (failed) {
    // Fallback texte si aucune source ne marche
    return (
      <div
        className={`flex items-center justify-center rounded-md text-white font-bold select-none ${className}`}
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg,#667eea,#764ba2)",
        }}
        aria-label="FG"
        title="FG"
      >
        <span style={{ fontSize: size * 0.42, lineHeight: 1 }}>FG</span>
      </div>
    );
  }

  return (
    <img
      src={sources[idx]}
      alt="Logo Gorski-Florent"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      onError={handleError}
      loading="eager"
    />
  );
};

export default LogoBrand;

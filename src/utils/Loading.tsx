import React from "react";

export function LoadingSpinner() {
  const loadingText: string = "Carregando os dados do usuario..";
  return (
    <div className="base-loading">  
      <div className="spinner"></div>
      <span className="spinner-text">{loadingText}</span>
    </div>
  );
}

const Ahorcado = ({ vidas }) => {
    return (
        <svg
            height="150"
            width="50"
            className="stroke-current text-blue-700 fill-none w-full z-20"
            viewBox="0 0 520 250"
        >
            {/* Poste de la horca */}
            <line x1="60" y1="20" x2="140" y2="20" strokeWidth="5" /> {/* Parte superior */}
            <line x1="140" y1="20" x2="140" y2="50" strokeWidth="5" /> {/* Cuerda */}
            <line x1="60" y1="20" x2="60" y2="230" strokeWidth="5" /> {/* Poste vertical */}
            <line x1="20" y1="230" x2="100" y2="230" strokeWidth="5" /> {/* Base */}
    
            {/* Cabeza */}
            {vidas <= 4 && <circle cx="140" cy="70" r="20" strokeWidth="4" />}
    
            {/* Cuerpo */}
            {vidas <= 3 && <line x1="140" y1="90" x2="140" y2="150" strokeWidth="4" />}
    
            {/* Brazo izquierdo */}
            {vidas <= 2 && <line x1="140" y1="110" x2="120" y2="130" strokeWidth="4" />}
    
            {/* Brazo derecho */}
            {vidas <= 2 && <line x1="140" y1="110" x2="160" y2="130" strokeWidth="4" />}
    
            {/* Pierna izquierda */}
            {vidas <= 1 && <line x1="140" y1="150" x2="120" y2="180" strokeWidth="4" />}
    
            {/* Pierna derecha */}
            {vidas <= 0 && <line x1="140" y1="150" x2="160" y2="180" strokeWidth="4" />}
        </svg>
    );
  };
  
export default Ahorcado;
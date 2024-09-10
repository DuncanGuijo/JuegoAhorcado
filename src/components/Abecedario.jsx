const Abecedario = ({ updateProgreso }) => {

    const abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return (
        <div className="flex flex-wrap gap-2 justify-center z-10">            
        {abecedario.map((letra) => (<button
           className="border-2 border-dashed border-blue-700 text-blue-700 font-mono flex justify-center items-center bg-white h-12 w-12 text-center p-1 shadow-md transition-transform transform hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            key={letra}
            value={letra}
            onClick={() => updateProgreso(letra)}
        >  {letra}
        </button>))}
        </div>
    );
};

export default Abecedario;
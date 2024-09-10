const Guiones = ({progreso}) => {
    return (
        <div className="z-10 mt-12 text-blue-800 flex justify-center items-center">
            {progreso.map((e,i) => (
                <span className="mx-1 font-mono text-3xl" key={i}>{e}</span>
            ))}
        </div>
        );
};

export default Guiones
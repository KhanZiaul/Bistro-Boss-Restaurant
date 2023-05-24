const Cover = ({ image, title, subTitle }) => {
    return (
        <div>
            <div className="hero h-[600px]" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-black bg-opacity-60 w-[350px] lg:w-[900px] h-[200px] lg:h-[250px] flex flex-col justify-center items-center">
                        <div className="p-5">
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
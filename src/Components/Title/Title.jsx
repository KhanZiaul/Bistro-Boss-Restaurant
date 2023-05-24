const Title = ({subTitle,Title}) => {
    return (
        <div className='text-center space-y-5 w-96 mx-auto'>
            <p className="text-yellow-500">{subTitle}</p>
            <h2 className='border-t-2 border-b-2 p-5 text-4xl uppercase'>{Title}</h2>
        </div>
    );
};

export default Title;
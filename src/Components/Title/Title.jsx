
const Title = ({subTitle,Title}) => {
    return (
        <div className='text-center space-y-4 w-72 mx-auto'>
            <p className="text-yellow-500">{subTitle}</p>
            <h2 className='border-t-2 border-b-2 p-4 text-4xl'>{Title}</h2> 
        </div>
    );
};

export default Title;

const Title = ({subTitle,Title}) => {
    return (
        <div className='text-center space-y-4 w-72'>
            <p>{subTitle}</p>
            <h2 className='border-t-2 border-b-2'>{Title}</h2> 
        </div>
    );
};

export default Title;
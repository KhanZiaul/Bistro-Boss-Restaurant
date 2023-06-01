import { useForm } from 'react-hook-form';
import Title from '../../../../Components/Title/Title';
const image_key = import.meta.env.VITE_IMAGE_KEY

const AddAnItem = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_key}`
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const image = imageData.data.display_url
                if (imageData.success) {
                    const { name, recipe, category, price } = data
                    const newItem = { name, recipe, category, image , price }
                    console.log(newItem)
                }
            })
    };

    return (
        <div className='w-full'>

            <div className="mb-12">
                <Title
                    subTitle={"--- What's New ? ---"}
                    Title={"ADD AN ITEM"}>
                </Title>

            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input {...register("name", { required: true })} type="text" placeholder="recipe" className="input input-bordered" />
                </div>
                <div className='flex gap-3 my-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select {...register("category", { required: true })} defaultValue='Category' type="text" placeholder="email" className="input input-bordered" >
                            <option disabled selected>Category</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true })} type="text" placeholder="price" className="input input-bordered" />
                    </div>
                </div>

                <div>
                    <textarea {...register("recipe", { required: true })} placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input {...register("image", { required: true })} type="File" placeholder="image" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn  bg-[#D1A054]">Add An Item</button>
                </div>
            </form>
        </div>
    );
};

export default AddAnItem;
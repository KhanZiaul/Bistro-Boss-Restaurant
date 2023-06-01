import { useForm } from 'react-hook-form';
import Title from '../../../../Components/Title/Title';

const AddAnItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>

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
                    <input type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className='flex gap-3 my-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue='Category' type="text" placeholder="email" className="input input-bordered" >
                            <option disabled selected>Category</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                </div>

                <div>
                    <textarea placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="File" placeholder="email" className="input input-bordered" />
                </div>


                <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                <select {...register("Title", { required: true })}>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>

                <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                <input {...register("Developer", { required: true })} type="radio" value="No" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddAnItem;
import React, { useEffect, useState } from 'react';
import { clearErrors, createNewArt } from '../../redux/actions/artActions';
import { ART_CATEGORIES } from '../../constants/ENUMS';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsCloudUpload } from 'react-icons/bs';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { CREATE_ART_RESET } from '../../redux/actions/actionTypes';
const NewArt = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [title, setTitle] = useState('');
  const [classification, setClassification] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('PAINTING');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [depth, setDepth] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [material, setMaterial] = useState('');
  const [framed, setFramed] = useState(false);
  const [medium, setMedium] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const { error, loading, success } = useSelector((state) => state.newArt);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      router.push('/admin/arts');
      dispatch({ type: CREATE_ART_RESET });
    }
  }, [success, dispatch, error, router]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createNewArt({
        artist_name: name,
        year_created: year,
        title,
        classification,
        description,
        category,
        height,
        width,
        depth,
        weight,
        price,
        material,
        framed,
        medium,
        image_url: image,
      })
    );
  };
  const fieldChangeHandler = (e) => {
    if (e.target.name === 'image_url') {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <h1 className='text-2xl font-extrabold text-primary-black'>
        Add new lot
      </h1>
      <form
        className='flex h-full w-full justify-items-center pt-20 rounded-3xl p-4 m-4 shadow-2xl items-center'
        onSubmit={submitHandler}>
        <div className='h-full flex flex-col justify-items-center items-center w-full gap-6'>
          <label htmlFor='name' className='form-label'>
            <span>{"Artist's Name"}</span>
            <input
              name='name'
              type='text'
              className='register-input'
              placeholder="artist's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor='year' className='form-label'>
            <span>{'Year of production'}</span>
            <input
              name='year'
              className='register-input'
              type='text'
              placeholder='year of production'
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>

          <label htmlFor='title' className='form-label'>
            <span>{'Lot Title'}</span>
            <input
              name='title'
              className='register-input'
              type='text'
              placeholder='lot title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor='classification' className='form-label'>
            <span>{'Classification'}</span>
            <input
              name='classification'
              className='register-input'
              type='text'
              placeholder='classification'
              value={classification}
              onChange={(e) => setClassification(e.target.value)}
            />
          </label>

          <label htmlFor='description' className='form-label'>
            <span>{'Description'}</span>
            <textarea
              name='description'
              className='register-input px-4'
              placeholder='Description of the lot'
              value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </label>
          <label className='rounded-lg px-4 py-2 cursor-pointer flex items-center gap-2 bg-primary-red text-primary-white font-medium'>
            <input
              type='file'
              name='image_url'
              accept='images/*'
              onChange={fieldChangeHandler}
            />
            <BsCloudUpload /> <span>Upload image</span>
          </label>
          <button
            className='rounded-lg px-4 py-2 cursor-pointer flex items-center gap-2 bg-primary-red text-primary-white font-medium'
            type='submit'>
            Submit
          </button>
        </div>
        {imagePreview && (
          <Image
            src={imagePreview}
            width={500}
            height={360}
            alt='Art'
            className=''
          />
        )}
        <div className='h-full flex flex-col justify-items-center items-center w-full gap-2'>
          <label htmlFor='' className='form-label'>
            <span>Category</span>
            <select
              className=' outline-none bg-primary-gray-2'
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              {ART_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label className='form-label'>
            <span>{'Height'}</span>
            <input
              name='Height'
              className='register-input'
              type='text'
              placeholder='height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label className='form-label'>
            <span>{'Width'}</span>
            <input
              className='register-input'
              type='text'
              placeholder='width'
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </label>
          <label htmlFor='depth' className='form-label'>
            <span>{'Depth'}</span>
            <input
              name='depth'
              className='register-input'
              type='text'
              placeholder='depth'
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
            />
          </label>
          <label htmlFor='weight' className='form-label'>
            <span>{'Weight'}</span>
            <input
              name='weight'
              className='register-input'
              type='text'
              placeholder='weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label htmlFor='price' className='form-label'>
            <span>{'Price'}</span>
            <input
              name='price'
              className='register-input'
              type='text'
              placeholder='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label htmlFor='material' className='form-label'>
            <span>{'Material'}</span>
            <input
              name='material'
              className='register-input'
              type='text'
              placeholder='material'
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            />
          </label>
          <label htmlFor='medium' className='form-label'>
            <span>{'Medium'}</span>
            <input
              name='medium'
              className='register-input'
              type='text'
              placeholder='medium'
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            />
          </label>
          <label className='form-label'>
            <span>{'Framed?'}</span>
            <input
              type='checkbox'
              value={framed}
              onChange={(e) => setFramed(e.target.checked)}
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default NewArt;

import React, { useEffect, useState } from 'react';
import {
  clearErrors,
  getArtDetails,
  updateArt,
} from '../../redux/actions/artActions';
import { ART_CATEGORIES } from '../../constants/ENUMS';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { BsCloudUpload } from 'react-icons/bs';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { UPDATE_ART_RESET } from '../../redux/actions/actionTypes';

const UpdateArt = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { artID } = router.query;
  const { art: artDetails, error: artDetailsError } = useSelector(
    (state) => state.artDetails
  );
  const { error, success } = useSelector((state) => state.updateArt);

  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [title, setTitle] = useState('');
  const [classification, setClassification] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('PAINTING');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [material, setMaterial] = useState('');
  const [framed, setFramed] = useState(false);
  const [medium, setMedium] = useState('');
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState(null);

  console.log('Inside useState');
  console.log('id', artID);
  console.log(artDetails);
  useEffect(() => {
    if (artDetails && artDetails._id !== artID) {
      dispatch(getArtDetails(artID));
    } else {
      setName(artDetails.artist_name);
      setYear(artDetails.year_created);
      setTitle(artDetails.title);
      setClassification(artDetails.classification);
      setDescription(artDetails.description);
      setCategory(artDetails.category);
      setHeight(artDetails.height);
      setWidth(artDetails.width);
      setDepth(artDetails.depth);
      setPrice(artDetails.price);
      setWeight(artDetails.weight);
      setMaterial(artDetails.material);
      setFramed(artDetails.framed);
      setMedium(artDetails.medium);
      setOldImage(artDetails.image_url);
    }

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (artDetailsError) {
      toast.error(artDetailsError);
      dispatch(clearErrors());
    }
    if (success) {
      router.push('/admin/arts');
      dispatch({ type: UPDATE_ART_RESET });
    }
  }, [router, success, dispatch, error, artDetails, artDetailsError, artID]);

  const submitHandler = (e) => {
    e.preventDefault();
    let artLot = {
      artist_name: name,
      year_created: year,
      title,
      classification,
      description,
      category,
      height,
      width,
      depth,
      price,
      weight,
      material,
      framed,
      medium,
    };
    if (image) {
      artLot.image_url = image;
    }
    dispatch(updateArt(artID, artLot));
  };
  const fieldChangeHandler = (e) => {
    if (e.target.name === 'image_url') {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
          setOldImage(reader.result);
        }
      };
    } else {
    }
  };
  return (
    <>
      <h1 className='text-2xl font-extrabold text-primary-black'>
        Update lot information
      </h1>
      <form
        className='flex h-full w-full justify-items-center pt-20 rounded-3xl p-4 m-4 shadow-2xl items-center'
        onSubmit={submitHandler}
        encType='multipart/form-data'>
        <div className='h-full flex flex-col justify-items-center items-center w-full gap-6'>
          <label htmlFor='name' className='form-label'>
            <span>{"Artist's Name"}</span>
            <input
              name='artist_name'
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
              name='year_created'
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
              accept='image/*'
              onChange={(e) => fieldChangeHandler(e)}
            />
            <BsCloudUpload /> <span>Upload image</span>
          </label>
          <button
            className='rounded-lg px-4 py-2 cursor-pointer flex items-center gap-2 bg-primary-red text-primary-white font-medium'
            type='submit'>
            Submit
          </button>
        </div>
        {oldImage && (
          <Image src={oldImage.url} width={500} height={360} alt='Art' />
        )}
        {image && <Image src={image} width={500} height={360} alt='Art' />}
        <div className='h-full flex flex-col justify-items-center items-center w-full gap-2'>
          <label htmlFor='' className='form-label'>
            <span>Category</span>
            <select
              name='category'
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
              name='height'
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
              checked={framed}
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default UpdateArt;

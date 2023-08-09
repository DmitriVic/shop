import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

interface UploadAvatarProps {
  onSubmit: (data: FormData) => void;
}

const UploadAvatar: React.FC<UploadAvatarProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ avatar: FileList }>();

  const onSubmitHandler = (data: { avatar: FileList }) => {
    const formData = new FormData();
    formData.append('avatar', data.avatar[0]);
    onSubmit(formData);
	 console.log('загрузка');
	 
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <label htmlFor="avatar">Выберите аватар:</label>
      <input
        type="file"
        id="avatar"
       // name="avatar"
        {...register('avatar', { required: true })}
      />
      {errors.avatar && <p>Файл обязателен для загрузки</p>}

      <button type="submit">Загрузить аватарвв</button>
    </form>
  );
};

export default UploadAvatar;


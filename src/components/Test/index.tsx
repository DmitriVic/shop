// import s from './index.module.css'
// import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

//import { indexProps } from "./index.props"

// export const Button = ({ appearance, arrow = 'none',  children, className, ...props }: ButtonProps): JSX.Element => {
// 	return (
// 	<button  className={cn(s.button, className, {
// 		[s.primary]: appearance == 'primary',
// 		[s.ghost]: appearance == 'ghost',
// 	})}
// 	{...props}
// 	>
// 		{children}
// 		{arrow != 'none' && <span className={cn(s.arrow, {
// 				[s.down]: arrow == 'down'
// 			})}>
// 				<ArrowIcon />
// 			</span>}
			
// 	</button>)
// }


// export const Test = ({  }:indexProps): JSX.Element => {
// 	return (
// 		<>
			
// 		</>
// 	)
// }

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  file: FileList;
  name: string;
}

export const Test = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const formData = new FormData();
    formData.append('file', data.file[0]);
    formData.append('name', data.name);
	 console.log(formData);
	 
   //  axios.post('/upload', formData).then((response) => {
   //    console.log(response);
   //  });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" {...register('file')} />
      <input type="text" {...register('name')} placeholder="Enter your name" />
      <button type="submit">Upload</button>
    </form>
  );
};



 import s from './index.module.css'
// import { ButtonProps } from './Button.props'
 import cn from 'classnames'
// import ArrowIcon from './arrow.svg';

import { indexProps } from "./index.props"

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


export const Orders = ({  }:indexProps): JSX.Element => {
	return (
		<>
			<div>Orders</div>
			<MyForm/>
		</>
	)
}

import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      // Set default values for all form fields here
      isd: 7 // Example default value for the "isd" field
    }
  });

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("isd", )}
        defaultValue={watch("isd")} // Set the default value for the "isd" field
        className={cn(s["inpt-code"], s["inpt"])}
        type="tel"
        placeholder="Код"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
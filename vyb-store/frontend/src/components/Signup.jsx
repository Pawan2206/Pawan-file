import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';

const schema = z.object({
  username: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  followers: z.number().min(0, 'Number of followers must be positive'),
  products: z.number().min(0, 'Number of products must be positive'),
});

const SignupForm = () => {
  const [earnings, setEarnings] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/calculate', data);
      setEarnings(response.data.earnings);
    } catch (error) {
      console.error('There was an error calculating earnings:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-primary-text">Username</label>
        <input id="username" {...register('username')} className="w-full p-2 border rounded-md" />
        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-primary-text">Email</label>
        <input id="email" {...register('email')} className="w-full p-2 border rounded-md" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block text-primary-text">Password</label>
        <input type="password" id="password" {...register('password')} className="w-full p-2 border rounded-md" />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor="followers" className="block text-primary-text">Followers</label>
        <input type="number" id="followers" {...register('followers')} className="w-full p-2 border rounded-md" />
        {errors.followers && <p className="text-red-500">{errors.followers.message}</p>}
      </div>
      <div>
        <label htmlFor="products" className="block text-primary-text">Products</label>
        <input type="number" id="products" {...register('products')} className="w-full p-2 border rounded-md" />
        {errors.products && <p className="text-red-500">{errors.products.message}</p>}
      </div>
      <button type="submit" className="bg-primary text-cta-text px-6 py-2 rounded-md">Sign Up</button>

      {earnings !== null && (
        <div className="mt-4">
          <h3 className="text-h3 text-primary-text">Estimated Earnings: ₹{earnings}</h3>
        </div>
      )}
    </form>
  );
};

export default SignupForm;

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/api/useLogin';
import { useAuth } from '../context/AuthProvider';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { mutateAsync } = useLogin();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await mutateAsync(data);
   login({ accessToken: res.accessToken, refreshToken: res.refreshToken });
      navigate('/');
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl p-8 space-y-6 bg-white rounded shadow-md"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        </div>

        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            {...register('username')}
            placeholder="Enter your username"
              defaultValue="emilys"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            {...register('password')}
            type="password"
            placeholder="Enter your password"
              defaultValue="emilyspass"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

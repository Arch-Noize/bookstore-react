import { Outlet } from 'react-router-dom';
import BookList from '../BookList';
import BookForm from '../BookForm';

const Frontpage = () => (
  <>
    <BookList />
    <BookForm />
    <Outlet />
  </>
);

export default Frontpage;

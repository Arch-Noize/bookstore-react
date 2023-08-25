import { Outlet } from 'react-router-dom';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

const Frontpage = () => (
  <>
    <BookList />
    <BookForm />
    <Outlet />
  </>
);

export default Frontpage;

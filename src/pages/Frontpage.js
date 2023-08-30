import { Outlet } from 'react-router-dom';
import BookNav from '../components/BookNav';

const Frontpage = () => (
  <>
    <BookNav />
    <Outlet />
  </>
);

export default Frontpage;

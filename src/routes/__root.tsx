import * as React from 'react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className='flex gap-2 p-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>{' '}
        <Link to='/login' className='[&.active]:font-bold'>
          Login
        </Link>
      </div>
      <Outlet />
    </React.Fragment>
  );
}

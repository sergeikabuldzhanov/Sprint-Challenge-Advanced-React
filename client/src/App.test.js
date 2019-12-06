import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { fireEvent } from '@testing-library/react';

afterEach(rtl.cleanup);

it('Renders without crashing',()=>{
  const wrapper = rtl.render(<App/>);
  const app = wrapper.queryByText(/Cup players data/)
  expect(app).toBeInTheDocument()
});

it('Displays loading text', ()=>{
  const wrapper = rtl.render(<App/>);
  const loader = wrapper.queryByText(/Loading/)
  expect(loader).toBeInTheDocument()
});
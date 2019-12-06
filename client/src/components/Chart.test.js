import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chart from './Chart';
import { fireEvent } from '@testing-library/react';
const { data } = require('../../../data');


afterEach(rtl.cleanup);

it('Chart renders without crashing',()=>{
  const wrapper = rtl.render(<Chart data = {data}/>);
  const app = wrapper.queryByText(/Searches per player/)
  expect(app).toBeInTheDocument()
});
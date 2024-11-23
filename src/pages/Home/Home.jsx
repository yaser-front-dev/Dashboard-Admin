import React from 'react';
import Cards from '../../components/Cards/Cards';
import {xAxisData} from "./../../data";
import Chart from '../../components/Chart/Chart';

export default function Home() {
  return (
    <>
        <Cards/>
        <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale"/>
    </>
  )
}

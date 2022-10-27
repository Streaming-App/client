import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import GridFilms from '../../components/GridFilms';

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <GridFilms />
      <Footer />
    </div>
  );
}

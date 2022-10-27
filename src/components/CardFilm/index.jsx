import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import './styles.css';

export default function CardFilm({ film }) {
  const { title, poster_path, vote_average, overview
  } = film;
  const API_IMG = 'https://image.tmdb.org/t/p/w500';
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="card">
      <img src={API_IMG + poster_path} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>ImDB: {vote_average}</p>
        <button type="button" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </button>
        {isModalOpen ? (
          <Modal onClose={() => setIsModalOpen(false)}>
            <h2>{title}</h2>
            <img className="banner-modal" src={API_IMG + poster_path} alt={title} />
            <span>{overview}</span>
            <p>ImDB: {vote_average}</p>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}

CardFilm.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

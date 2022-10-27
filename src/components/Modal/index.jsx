import PropTypes from 'prop-types';
import './styles.css';

export default function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" type="button" onClick={onClose}>
          Close Modal
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

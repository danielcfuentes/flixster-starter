import PropTypes from 'prop-types';
import './Modal.css';
const Modal= ({onClose}) => {

//   if (!isOpen) return null;

  return (
    <section id = "playlistModal" className = "modal-overlay">
        <div className = "modal-content">
            <span className="close" onClick={onClose}>&times;</span>
                <h1>Movie Title</h1>

                <img src="https://example.com/image.jpg" alt="Movie Poster" />

                <p>Release Date</p>

                <p>Overview</p>

                <p>Genre</p>
        </div>
    </section>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;

import classes from "./FlatReview.module.scss";
import Modal from "react-modal";
import { useState } from "react";
function FlatView(props: any) {
  const flat = props.location.state.flat;
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={classes.FlatReview}>
      <h1>Flat Review</h1>
      <div className={classes.FlatBox}>
        <div className={classes.ImagesBox}>
          <div className={classes.MainImage}>
            <img src={flat.mainImage} alt="Flat-main-image" />
          </div>
          <div className={classes.OtherImages}>
            <img src={flat.mainImage} alt="Flat-other-image" />
            <img src={flat.mainImage} alt="Flat-other-image" />
            <img src={flat.mainImage} alt="Flat-other-image" />
          </div>
        </div>
        <div className={classes.FlatDescription}>
          <div className={classes.AboutFlat}>
            <h2>{flat.title}</h2>
            <p>{flat.description}</p>
            <div className={classes.buttons}>
              <button onClick={openModal}>Order</button>
              <button>Check availability</button>
            </div>
          </div>
          <div className={classes.FlatSpecifications}>
            <h2>Specifications</h2>
            <p>Price {flat.price} €</p>
            <p>Rooms {flat.rooms}</p>
            <p>Beds {flat.beds}</p>
          </div>
        </div>
      </div>
      <Modal
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        isOpen={modalIsOpen}
      >
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

export default FlatView;

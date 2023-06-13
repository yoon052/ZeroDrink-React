import { useState } from "react";

function Modal({ handleAddItem, isModalOpen, handleModalOpen }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ name, content, image });
    handleModalOpen(false);
  };

  return (
    <div className="modal-background" hidden={!isModalOpen}>
      <form className="modal" onSubmit={handleSubmit}>
        <span className="modal-close" onClick={() => handleModalOpen(false)}>
          X
        </span>
        <label htmlFor="name" className="label">
          이름
        </label>
        <input
          id="name"
          type="text"
          placeholder="실론티제로"
          className="input"
          maxLength="10"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="image" className="label">
          이미지
        </label>
        <input
          id="image"
          type="text"
          placeholder="URL"
          className="input"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="content" className="label">
          내용
        </label>
        <input
          id="content"
          type="text"
          placeholder="실론티와 똑같은 맛이지만 칼로리는 제로😋"
          className="input"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="submit-button">
          저장
        </button>
      </form>
    </div>
  );
}
export default Modal;
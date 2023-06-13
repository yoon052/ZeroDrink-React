import { useState } from "react";
import Modal from "./Modal";

function App() {
  const initData = [
    {
      name: "펩시제로슈거라임",
      content: "저의 최애 제로음료!",
      image:
        "https://sitem.ssgcdn.com/73/68/39/item/1000061396873_i1_1100.jpg",
    },
    {
      name: "밀키스제로",
      content: "밀키스와 똑같은 맛!",
      image:
        "https://img.danawa.com/prod_img/500000/782/158/img/19158782_1.jpg",
    },
    {
      name: "탐스제로",
      content: "3가지맛이라서 골라 마실수 있어요!",
      image:
        "https://simage.lottechilsung.co.kr/goods/31/14/37/83/24186_COL_376_590.jpg",
    },
  ];

  const [data, setData] = useState(initData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let handleAddItem = (item) => {
    setData([...data, item]);
  };

  let handleModalOpen = (value) => {
    setIsModalOpen(value);
  };

  return (
    <>
      <header>
        <span className="title">제로음료수</span>
      </header>
      <main>
        <div className="sidebar">
          <button
            type="button"
            className="add-button"
            onClick={() => setIsModalOpen(true)}
          >
            추가
          </button>
          {data.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
        <section className="container">
          {data.map((item) => (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
        </section>
      </main>
      <Modal
        handleAddItem={handleAddItem}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
      />
    </>
  );
}

export default App;
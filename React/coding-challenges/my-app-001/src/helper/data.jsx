export const data = [];
const dataPic = () => {
  for (let i = 1; i < 21; i++) {
    data.push({
      id: `${i}`,
      img: `https://picsum.photos/200/300?random=${i}`,
      content: `resim-${i}.`,
    });
  }
  return data;
};

dataPic();

import { useEffect, useState } from "react";

const useSortColumn = (data, columnObj) => {
  //? Siralanacak local state (sutun verilerinin local state hali)
  const [sortedData, setSortedData] = useState(data);
  const [columns, setColumns] = useState(columnObj);

  //! data state'i her guncellendiginde local state'i de guncelle
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (arg) => {
    setColumns({ ...columns, [arg]: columns[arg] * -1 });
    setSortedData(
      sortedData
        ?.map((item) => item)
        .sort((a, b) => {
          if (!isNaN(Number(a[arg]))) {
            return columns[arg] * (a[arg] - b[arg]);
          } else {
            if (columns[arg] === 1) {
              return b[arg] > a[arg] ? 1 : b[arg] < a[arg] ? -1 : 0;
            } else {
              return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0;
            }
          }
        })
    );
  };

  return { sortedData, handleSort, columns };
};

export default useSortColumn;

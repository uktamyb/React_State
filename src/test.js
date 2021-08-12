const data = [
  { id: 1, name: "Uktam", status: "Hight" },
  { id: 2, name: "Barkamol", status: "Low" },
  { id: 3, name: "Abror", status: "Very high" },
  { id: 4, name: "Ikrom", status: "Very low" },
];

const onDelete = (id) => {
  const newData = data.filter((value) => value.id !== id)
  console.log(newData);
};

onDelete(3)
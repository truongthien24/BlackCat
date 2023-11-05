export const columns = (onClickFuncc) => {
  return [
    {
      title: "Tên sách",
      dataIndex: "tenSach",
      key: "tenSach",
      width: "30%",
    },
    {
      title: "Thể loại",
      dataIndex: "theLoai",
      key: "theLoai",
      width: "15%",
    },
    {
      title: "Số lượng",
      dataIndex: "soLuong",
      key: "soLuong",
      width: "9%",
    },
    {
      title: "Tác giả",
      dataIndex: "tacGia",
      key: "tacGia",
      width: "15%",
    },
    {
      title: "Nhà cung cấp",
      dataIndex: "nhaCungCap",
      key: "nhaCungCap",
      width: "12%",
    },
    {
      title: "Nhà xuất bản",
      dataIndex: "nhaXuatBan",
      key: "nhaXuatBan",
      width: "12%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      width: "15%",
    },
  ];
};

// getDataTable
export const getDataTable = (data) => {
  const dataResult = [];
  data?.length > 0 &&
    data.map((item, index) => {
      const obj = { ...item, key: index };
      return dataResult.push(obj);
    });
  return dataResult;
};

export const setGridColumn = (size) => {
  if (size === "3") {
    return "col-span-3";
  } else if (size === "2") {
    return "col-span-2";
  } else {
    return "col-span-1";
  }
};

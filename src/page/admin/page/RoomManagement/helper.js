<<<<<<< HEAD
export const columns = (onClickFuncc) => {
  return [
    {
      title: "Tên sách",
      dataIndex: "tenSach",
      key: "tenSach",
      width: "25%",
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
      width: "8%",
    },
    {
      title: "Tác giả",
      dataIndex: "tacGia",
      key: "tacGia",
      width: "20%",
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
  ];
};
=======
    export const columns = (onClickFuncc) => {
        return [
            {
                title: 'Tên sách',  
                dataIndex: 'tenSach',
                key: 'tenSach',
                width: '35%',
            },
            {
                title: 'Thể loại',
                dataIndex: 'theLoai',
                key: 'theLoai',
                width: '15%',
            },
            {
                title: 'Số lượng',
                dataIndex: 'soLuong',
                key: 'soLuong',
                width: '15%'
            },
            {
                title: 'Tác giả',
                dataIndex: 'tacGia',
                key: 'tacGia',
                width: '20%',
            },
            {
                title: 'Hình ảnh',
                dataIndex: 'hinhAnh',
                key: 'hinhAnh',
                width: '20%',
            },
        ]
    }
>>>>>>> 481df719f819c3d7493cb33eb13321dde8868f66

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

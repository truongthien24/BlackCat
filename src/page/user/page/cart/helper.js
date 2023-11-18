export const columns = (isMobile) => {
    return [
        {
            name: 'thongTinSanPham',
            title: 'Sản phẩm',
            width: isMobile ? '45%' : '50%',
        },
        {
            name: 'gia',
            title: 'Giá',
            width: isMobile ? '15%' : '10%',
            alignment: "center",
        },
        {
            name: 'soLuong',
            title: 'Số lượng',
            width: isMobile ? '20%' : '15%',
            alignment: "center",
        },
        {
            name: 'thanhTien',
            title: 'Thành tiền',
            width: isMobile ? '20%' : '15%',
            alignment: "center",
        },
        {
            name: 'action',
            title: '',
            width:  isMobile ? '8%' : '10%',
            alignment: "center",
        },
    ]
} 
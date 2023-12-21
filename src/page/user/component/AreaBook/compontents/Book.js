import { Icon } from "assets/icon";
import { COLOR } from "page/user/shareComponent/constant";
import React, { useContext, useState } from "react";
import { checkLogin } from "page/user/shareComponent/Function/checkLogin";
import { toast } from "react-hot-toast";
import ModalReviewSach from "../modal/ModalReviewSach";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useUpdateAccount from "page/admin/page/AccountManagement/hook/useUpdateAccount";
import useLoadingEffect from "fuse/hook/useLoadingEffect";
import { LayoutContext } from "page/user/layout/Layout1";

const Book = (props) => {
  const { data } = props;

  const [review, onReview] = useState({
    open: false,
    data: null,
  });

  const navigate = useNavigate();

  const {fetchDataAccount} = useContext(LayoutContext);

  const { userInfo } = useSelector((state) => state.home);

  const { mutate, isLoading } = useUpdateAccount();

  const addToFavourite = async (data) => {
    // Check login
    if (checkLogin()) {
      // toast("Chuc nang dang phat trien!", {
      //   icon: "👏",
      // });
      const oldFavouriteCard = userInfo?.danhSachYeuThich;
      // Kiểm tra sách có tồn tại trong danh sách yêu thích trước đó hay không
      const findIndex = oldFavouriteCard?.findIndex(
        (sach) => sach?.sach?._id === data?._id
      );
      console.log("findIndex", findIndex);
      if (findIndex == -1) {
        // Chưa tồn tại thì thêm vào mảng
        oldFavouriteCard.push({ sach: data?._id });
        console.log('oldFavouriteCard', oldFavouriteCard)
        await mutate({
          Data: { id: userInfo?._id, danhSachYeuThich: oldFavouriteCard },
          onSuccess: async (res) => {
            toast.success(res.data.message);
            await fetchDataAccount();
          },
          onError: (err) => {
            toast.error(err.error.message);
          },
        });
      }
    } else {
      toast.error("Bạn chưa đăng nhập");
    }
  };

  const handleReview = (data) => {
    onReview({
      open: true,
      data,
    });
  };

  const chooseBook = () => {
    navigate(`/infoBook/${data?._id}`);
  };

  useLoadingEffect(isLoading);

  return (
    <>
      <div className="rounded-[5px] bg-[white] cursor-pointer book">
        <div className="relative w-full book__heading">
          <img
            src={data?.hinhAnh?.url}
            className="w-full h-[220px] md:h-[260px] 2xl:h-[300px] rounded-[5px] book__heading-img"
          />
          <div className="book__heading-option">
            <div className="flex items-center justify-center h-full w-ful">
              <button
                className="bg-[#fff] book__heading-option-button rounded-[10px] w-[40px] h-[40px] flex items-center justify-center mx-[5px]"
                onClick={() => {
                  handleReview(data);
                }}
              >
                <Icon name="eye" color="#000" />
              </button>
              <button
                className="bg-[#fff] book__heading-option-button rounded-[10px] w-[40px] h-[40px] flex items-center justify-center mx-[5px]"
                onClick={() => addToFavourite(data)}
              >
                <Icon name="heart" color="#000" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center mt-[5px]"
          onClick={chooseBook}
        >
          <h5>{data?.tenSach}</h5>
          <span style={{ color: `${COLOR.primaryColor}` }} className="my-[7px]">
            {(data?.gia * 0.1).toLocaleString()} VND
          </span>
          <span className="text-[13px] text-[#f7941d]">
            {data?.soLuong > 0 ? "Còn hàng" : "Hết hàng"}
          </span>
        </div>
      </div>
      {review?.open && (
        <ModalReviewSach
          open={review?.open}
          data={review?.data}
          title=""
          onReview={onReview}
        />
      )}
    </>
  );
};

export default Book;

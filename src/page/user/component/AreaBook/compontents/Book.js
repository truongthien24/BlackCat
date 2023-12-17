import { Icon } from "assets/icon";
import { COLOR } from "page/user/shareComponent/constant";
import React, { useState } from "react";
import { checkLogin } from "page/user/shareComponent/Function/checkLogin";
import { toast } from "react-hot-toast";
import ModalReviewSach from "../modal/ModalReviewSach";
import { useNavigate } from "react-router-dom";

const Book = (props) => {
  const { data } = props;

  const [review, onReview] = useState({
    open: false,
    data: null,
  });

  const navigate = useNavigate();

  const addToFavourite = () => {
    // Check login
    if (checkLogin()) {
      toast("Chuc nang dang phat trien!", {
        icon: "👏",
      });
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
    navigate(`/infoBook/${data?._id}`)
  }

  return (
    <>
      <div className="rounded-[5px] bg-[white] cursor-pointer book" onClick={chooseBook}>
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
                onClick={addToFavourite}
              >
                <Icon name="heart" color="#000" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[5px]">
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

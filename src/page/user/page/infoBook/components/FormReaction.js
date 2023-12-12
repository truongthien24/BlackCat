import { yupResolver } from "@hookform/resolvers/yup";
import useCreateDanhGia from "page/admin/page/danhGiaManagement/hook/useCreateDanhGia";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

const FormReaction = ({ onSubmit }) => {
  const { mutate, isLoading } = useCreateDanhGia();

  const method = useForm({
    mode: "onSubmit",
    resolver: yupResolver(
      yup.object().shape({
        noiDung: yup.string().required("Please input"),
      })
    ),
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
    register,
  } = method;

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mt-6">
          <input
            placeholder="Nhập đánh giá vào đây"
            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
            {...register("noiDung")}
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              className="flex aspect-square h-full items-center bg-[#000] justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
            >
              <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormReaction;

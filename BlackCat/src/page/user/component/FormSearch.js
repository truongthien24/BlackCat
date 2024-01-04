import { Icon } from 'assets/icon';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/action/homeAction';
import { COLOR } from '../shareComponent/constant';

const FormSearch = (props) => {
    // Props
    const { data } = props;

    const dispatch = useDispatch();

    const defaultValues = {
        valueSearch: ""
    }

    const method = useForm({
        defaultValues,
        mode: 'onSubmit'
    })

    const { reset, register, setValue, getValues, watch, handleSubmit } = method;

    const onSubmit = (data) => {
        dispatch(setLoading({
            status: 'isLoading',
        }));

        setTimeout(() => {
            dispatch(setLoading({
                status: 'done'
            }));
        }, 2000)
    }

    return (
        <FormProvider {...method}>
            <form className={`min-w-[350px] border-[2px] border-[#498374] border-solid rounded-[5px] relative`} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="w-full px-[20px] py-[8px] text-[12px] outline-none" placeholder='Nhập từ khoá tìm kiếm' {...register('valueSearch')} />
                <button className={`absolute right-[-10px] top-[50%] translate-y-[-50%] bg-[#498374] w-[50px] h-[50px] flex items-center justify-center text-[#fff] rounded-[50%] border-none hover:shadow-md hover:shadow-[#498374] duration-200`}>
                    <Icon name="search" />
                </button>
            </form>
        </FormProvider>
    )
}

export default FormSearch